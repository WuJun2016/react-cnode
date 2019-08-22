import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'
import {
  observer,
  inject,
} from 'mobx-react'
import AppState from '../../store/app.state'

@inject('appState') @observer
class TopicList extends React.Component {
  componentDidMount() {
    //  do something here
  }

  changeName = (event) => {
    const { value } = event.target
    this.props.appState.changeName(value)
  }

  bootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  render() {
    const { appState } = this.props
    return (
      <>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        <input type="text" onChange={this.changeName} />
        <div>{ appState.msg }</div>
      </>
    )
  }
}

export default TopicList
