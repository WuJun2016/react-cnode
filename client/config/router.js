import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import TopicList from '../views/topic-list/index';
import TopicDetail from '../views/topic-detail/index';
import Test from '../views/test/api-test';

export default () => [
  <Route path="/" render={() => <Redirect to="/test" />} exact key="/" />,
  <Route path="/test" component={Test} key="test" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
]
