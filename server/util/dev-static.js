const axios = require('axios');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const path = require('path');
const ejs = require('ejs');
const serialize = require('serialize-javascript')
const bootstrapper = require('react-async-bootstrapper')
const ReactDOMServer = require('react-dom/server');
const proxy = require('http-proxy-middleware');
const Helmet = require('react-helmet').default

const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {  // 获得html模版
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/public/server.ejs')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

// const Module = module.constructor;  
// 处理找不到react
const NativeModule = require('module')  // 获得的是一个原生的模块
const vm = require('vm')

// 
const getModuleFromString = (bundle, filename) => {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true
  })
  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)
  return m
}





const mfs = new MemoryFs;
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;

let serverBundle; // 转换成module后的
let createStoreMap;
serverCompiler.watch({}, (err, stats) => {
  if(err) throw err;
  stats = stats.toJson();
  stats.errors.forEach(err => console.log(err));
  stats.warnings.forEach(warn => console.log(warn));

  // 获得webpack-dev-server打包的文件在内存中的路径
  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  );

  const bundle = mfs.readFileSync(bundlePath, 'utf-8'); // 此时输出的是一个字符串, 

  // const m = new Module();
  // m._compile(bundle, 'server-entry.js');
  const m = getModuleFromString(bundle, 'server-entry.js')

  serverBundle = m.exports.default;
  createStoreMap = m.exports.createStoreMap;
})

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:3000'
  }))

  app.get('*', (req, res) => {
    getTemplate().then((template) => {
      const routerContext = {}
      console.log(createStoreMap)
      const stores = createStoreMap()
      const app = serverBundle(stores, routerContext, req.url)

      bootstrapper(app).then(() => {
        if (routerContext.url) {
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
          return
        }
        const helmet = Helmet.rewind()
        const state = getStoreState(stores);
        const content = ReactDOMServer.renderToString(app);
     
        const html = ejs.render(template, {
          appString: content,
          initialState: serialize(state),
          meta: helmet.meta.toString(),
          title: helmet.title.toString(),
          style: helmet.style.toString(),
          link: helmet.link.toString()
        })
        res.send(html)
        // res.send(template.replace('<!-- app -->', content))
      })
    })
  })
}