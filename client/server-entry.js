import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider, useStaticRendering } from 'mobx-react';
import App from './views/App.jsx'; // eslint-disable-line
import { createStoreMap } from './store/store'

useStaticRendering(true)

export default (stores, routerContext, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)
// 此时也要抛出 <App />, 这样得到的才是html内容, 然后这还是jsx代码, 所以要打包

export { createStoreMap }
