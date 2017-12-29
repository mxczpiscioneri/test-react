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
          <Info
            icon={IconInfo}
            alt='clique aqui e veja os detalhes'
            className={styles.info}
            title='Parcela flex'
            body={
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            } /> 
        </p>
        <p>
          <span className={styles.labels}>Prazo </span>
          <span className={styles.deadline}>{props.deadline} Meses </span>
          <Info 
            icon={IconInfo} 
            alt='clique aqui e veja os detalhes' 
            className={styles.info} 
            title='Prazo' 
            body={
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            } /> 
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