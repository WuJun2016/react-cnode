import React from 'react';
import PropTypes from 'prop-types';
import {
  observer,
  inject,
} from 'mobx-react'
import { AppState } from '../../store/app.state'

@inject('appState') @observer
class TopicList extends React.Component {
  componentDidMount() {
    //  do something here
  }

  render() {
    const { appState } = this.props
    return (
      <div>{ appState.count }</div>
    )
  }
}

export default TopicList
