import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './item.css'

const WhyBuy = props => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={props.img}
        alt={props.title}/>
      <span className={styles.title}>{props.title}</span>
      {props.children}
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhyBuy)