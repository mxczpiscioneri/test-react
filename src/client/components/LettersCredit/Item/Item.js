import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './Item.css'
import Info from '../../Info/Info'
import IconInfo from './info.svg'

const Item = props => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.star} />
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
          <Info icon={IconInfo} alt='parcela flex' className={styles.info} title='Parcela flex' body='Parcela flex'/>
        </p>
        <p>
          <span className={styles.labels}>Prazo </span>
          <span className={styles.deadline}>{props.deadline} Meses </span>
          <Info icon={IconInfo} alt='prazo' className={styles.info} title='Prazo' body='Prazo'/> 
        </p>
      </div>
      <div className={styles.button} onClick={props.onClick}>
        <span className={styles.buttonText}>TENHO INTERESSE</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)