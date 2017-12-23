import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveProgressLinear } from '../../actions/progressLinearActions'
import LinearProgress from 'material-ui/LinearProgress'
import styles from './progressLinear.scss'

const ProgressLinear = props => {
  return props.show ? (
    <div className={styles.progressLinear}>
      <LinearProgress
        mode='determinate'
        value={props.completed}
        color='#f3123c'
      />
    </div>
  ) : null
}

const mapStateToProps = state => {
  const progress = state.progressLinearReducer.content

  return {
    show: progress.show,
    completed: progress.completed
  }
}

export default connect(mapStateToProps)(ProgressLinear)
