import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Routes from '../config/router';

export default class App extends PureComponent {
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
        </div>
        <Routes />
      </div>
    )
  }
}
