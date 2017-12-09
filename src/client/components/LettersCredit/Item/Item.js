import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './Item.css'
import Star from './icone-estrela.svg';
import StarSelected from './icone-estrela-selecionada.svg';

const Item = props => {
  return (
    <div className={styles.container} onClick={props.onClick}>
      <div className={styles.top}>
        <img src={(props.selected) ? StarSelected : Star} />
      </div>
      <div className={styles.content}>
        <div className={styles.retancle}></div>
        <p>
          <span className={styles.valueSymbol}>R$ </span>
          <span className={styles.value}>{props.value.toFixed(3)}</span>
        </p>
        <p>
          <span className={styles.labels}>Valor da Parcela </span>
          <span className={styles.installment}>R$ {props.installment}</span>
        </p>
        <p>
          <span className={styles.labels}>Parcela Flex </span>
          <span className={styles.installmentFlex}>R$ {props.installmentFlex}</span>
        </p>
        <p>
          <span className={styles.labels}>Prazo </span>
          <span className={styles.deadline}>{props.deadline} Meses</span>
        </p>
      </div>
      <div className={(props.selected) ? styles.buttonSelected : styles.button}>
        <span className={(props.selected) ? styles.buttonTextSelected : styles.buttonText}>TENHO INTERESSE</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)