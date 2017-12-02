import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './video.css'

const Video = props => {
  return (
    <video controls className={styles.video}>
      <source src={`https://media.w3.org/2010/05/sintel/trailer_hd.mp4`} type='video/mp4'/>
    </video>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Video)