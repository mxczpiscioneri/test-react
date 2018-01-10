import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './summaryMobile.css'
import CarImg from './car.png'

const SummaryMobile = props => {
  const letterCredit = props.letterCredit

  return (
    <section className={styles.container}>
      {
        (letterCredit && letterCredit.id > 0)
        && (
          <div>
            <p>
              <span className={styles.title}>Detalhes do <span className={styles.titleStrong}>consórcio simulado</span></span>
            </p>

            <div className={styles.installments}>
              <div className={styles.installmentBlock}>
                <div className={styles.labels}>Parcela normal</div>
                <div className={styles.installment}>{letterCredit.duration} <span className={styles.labels}>x</span> R$ {letterCredit.regular_installment_value.toFixed(2)}</div>
              </div>
              <div className={styles.installmentBlock}>
                <div className={styles.labels}>Parcela flex </div>
                <div className={styles.installmentFlex}>{letterCredit.duration} <span className={styles.labels}>x</span> R$ {letterCredit.flex_installment_value.toFixed(2)}</div>
              </div>
            </div>

            <div className={styles.car}>
              <div className={styles.carInfo}>
                <p className={styles.carReference}>Bem de referência *</p>
                <p className={styles.carModel}>{`${letterCredit.vehicle.Marca.nome} ${letterCredit.vehicle.Modelo.nome}`}</p>
                <p className={styles.carAdvice}>*O veículo é referência para a carta de crédito escolhida. * </p>
              </div>
              <div className={styles.carImg}>
                <img
                  src={letterCredit.vehicle.Fotos[0].caminho}
                  alt={'veiculo'} />
              </div>
            </div>

            <div className={styles.separator}></div>

            <p>
              <span className={styles.labelsLight}>Valor da carta de crédito total </span>
              <span className={styles.value}>R$ {letterCredit.full_value.toFixed(3)}</span>
            </p>
            <div className={styles.valuesContainer}>
              <div className={styles.reserveFundContainer}>
                <span className={styles.labelsLight}>Fundo de reserva </span>
                <span className={styles.value}>{letterCredit.reserve_fee.toFixed(2)}% am</span>
              </div>
              <div className={styles.insuranceContainer}>
                <span className={styles.labelsLight}>Seguro </span>
                <span className={styles.value}>{letterCredit.insurance_fee.toFixed(2)}% am</span>
              </div>
            </div>
            <p>
              <span className={styles.labelsLight}>Taxa de gestão </span>
              <span className={styles.value}>{letterCredit.administration_fee.toFixed(2)}% am</span>
            </p>
          </div>
        )
      }
    </section>
  )
}

SummaryMobile.propTypes = {
  letterCredit: PropTypes.object.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SummaryMobile)