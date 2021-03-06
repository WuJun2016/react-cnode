import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import TopicList from '../views/topic-list/index';
import TopicDetail from '../views/topic-detail/index';
import Test from '../views/test/api-test';

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="/" />,
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
  <Route path="/test" component={Test} key="test" />,
]
