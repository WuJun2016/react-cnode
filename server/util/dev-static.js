const axios = require('axios');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const proxy = require('http-proxy-middleware');

const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {  // 获得html模版
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/public/index.html')
      .then(res => {
        resolve(res.data)
      })
      .catch(reject)
  })
}

const Module = module.constructor;

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

  const m = new Module();
  m._compile(bundle, 'server-entry.js');
  serverBundle = m.exports.default;
})

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://localhost:3000'
  }))

  app.get('*', (req, res) => {
    getTemplate().then((template) => {
      const content = ReactDOMServer.renderToString(serverBundle);
      res.send(template.replace('<!-- app -->', content))
    })
  })
}