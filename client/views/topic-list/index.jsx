import React from 'react';
import PropTypes from 'prop-types';
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
        <input type="text" onChange={this.changeName} />
        <div>{ appState.msg }</div>
      </>
    )
  }
}

export default TopicList
