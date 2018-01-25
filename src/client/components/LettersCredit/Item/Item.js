import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NumberFormat from 'react-number-format'
import { Container, Row, Col, Hidden } from '../../Grid/Grid'
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
          <span className={styles.value}><NumberFormat value={props.value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
        </p>
        <p className={styles.itemValue}>
          <span className={styles.installment}>R$ <NumberFormat value={props.installment} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
          <span className={styles.labels}>Valor da Parcela</span>
        </p>
        <p className={styles.itemValue}>
          <span className={styles.installmentFlex}>R$ <NumberFormat value={props.installmentFlex} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
          <span className={styles.labels}>Parcela Flex</span>
          <Hidden xs>
            <Info
              icon={IconInfo}
              alt='clique aqui e veja os detalhes'
              className={styles.info}
              title='Parcela flex'
              body={
                <p>Você pode reduzir o valor das suas parcelas em até 30%. Este desconto vale até a contemplação ou até a metade do seu plano (o que ocorrer primeiro). Depois disso, suas parcelas serão reajustadas somando-se o valor do desconto.</p>
              } />
          </Hidden>
        </p>
        <p>
          <span className={styles.labels}>Prazo </span>
          <span className={styles.deadline}>{props.deadline} Meses </span>
          <Hidden xs>
            <Info
              icon={IconInfo}
              alt='clique aqui e veja os detalhes'
              className={styles.info}
              title='Prazo'
              body={
                <p><b>Prazo igual a 72 meses:</b> trata-se de um grupo em formação, onde ainda não foi inaugurado. No prazo máximo de 90 dias, será inaugurado e você poderá ofertar lances e participar dos sorteios mensais.<br /><b>Prazo menor que 72 meses:</b> são grupos em andamento, onde já ocorrem assembleias para oferta de lances e sorteios mensais.</p>
              } />
          </Hidden>
        </p>
      </div>
      <div className={styles.button} onClick={props.onClick}>
        <span className={styles.buttonText}>VER DETALHES</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)