const ReactSSR = require('react-dom/server');
const express = require('express');
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV == 'development';
const app = express();


if(!isDev) { // 非开发时的服务端渲染
  const serverEntry = require('../dist/server-entry').default;
  const templateHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  // 这样可以通过带有 /public 前缀地址来访问 dist 目录中的文件了。
  
  app.get('*', (req, res) => {
    const renderJs = ReactSSR.renderToString(serverEntry);
    const appString = templateHtml.replace('<!-- app -->', renderJs)
    res.send(appString)
  })
} else {
  // 配置较多, 单独放在dev-static里面
  const devStatic = require('./util/dev-static');
  devStatic(app)
}

app.listen(3333, () => {
  console.log('server is listing on 3333')
})

