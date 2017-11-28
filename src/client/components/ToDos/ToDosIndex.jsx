import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './toDosIndex.scss'

class ToDosIndex extends Component {
  render() {
    return (
      <div className={styles.toDosIndex}>
        Hello World
      </div>
    )
  }
}

export default ToDosIndex