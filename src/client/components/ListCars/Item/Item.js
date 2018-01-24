import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NumberFormat from 'react-number-format'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './Item.css'
import iconPrice from './price.svg'

const Item = props => {
  return (
    <div className={styles.container}>
      <div className={styles.boxImage}>
        <img
          src={props.image}
          alt={`Consórcio Santander - Foto Veículo ${props.brand} ${props.name}`}
          title={`Foto Veículo ${props.brand} ${props.name}`} />
      </div>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.value}>
        <img src={iconPrice} />
        Preço: <span>R$ <NumberFormat value={props.value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
      </p>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)