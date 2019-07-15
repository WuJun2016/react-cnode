import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const root = document.getElementById('root');
const render = (Component) => {
  renderMethod(
    <Component />,
    root
  )
}

if (module.hot) {
  const HotApp = hot(App);
  render(HotApp)
}

render(App)

// hydrate 如果使用了服务端的渲染, 这用这个方法,
// 这样会对比客户端和服务端的代码, 如果两个不一样则以客户端为主
