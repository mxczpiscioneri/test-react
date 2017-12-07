import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './Item.css'

const Item = props => {
  const containerClass = classNames(
    styles.container,
    {
      [styles.selected]: props.selected
    }
  )
  return (
    <div className={containerClass}>
      <div className={styles.boxImage}>
        <img src={props.image} alt={props.name} />
      </div>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.value}>Preço: <span>R$ {props.value.toFixed(3)}</span></p>
      <div className={(props.selected) ? styles.selected : null}></div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)