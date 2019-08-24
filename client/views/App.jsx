import React, { PureComponent } from 'react';
import { Link, withRouter, BrowserRouter } from 'react-router-dom';
import Routes from '../config/router';

class App extends PureComponent {
  componentDidMount() {
    // do something here
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/">首页</Link>
          <br />
          <Link to="/detail">祥情</Link>
          <Routes />
        </div>
      </div>
    )
  }
}

export default withRouter(App)
