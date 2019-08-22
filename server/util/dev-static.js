const axios = require('axios');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const path = require('path');

const proxy = require('http-proxy-middleware');
const serverRender = require('./server-render')
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
  serverBundle = m.exports;
})


module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:3000'
  }))
  app.get('*', (req, res, next) => {

    if (!serverBundle) {
      return res.send('waiting for compile, refresh later')
    }

    getTemplate().then((template) => {
      console.log('***',serverBundle)
      return serverRender(serverBundle, template, req, res)
    }).catch(next)
  })
}