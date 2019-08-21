import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from './views/App.jsx'; // eslint-disable-line

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;


const root = document.getElementById('root');
const render = (Component) => {
  renderMethod(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const NextApp = require('./views/App.jsx').default // eslint-disable-line
    render(NextApp)
  })
}

// hydrate 如果使用了服务端的渲染, 这用这个方法,
// 这样会对比客户端和服务端的代码, 如果两个不一样则以客户端为主
