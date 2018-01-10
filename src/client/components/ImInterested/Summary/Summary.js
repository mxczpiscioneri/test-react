import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import Info from '../../Info/Info'
import styles from './summary.css'
import InfoImg from './info.svg'
import CarImg from './car.png'

const Summary = props => {
  const letterCredit = props.letterCredit

  return (
    <section className={styles.container}>
      {
        (letterCredit && letterCredit.id > 0) &&
        (
          <div>
            <p>
              <span className={styles.title}>Resumo da simulação</span>
            </p>
            <p>
              <span className={styles.valueSymbol}>R$ </span>
              <span className={styles.value}>{letterCredit.full_value.toFixed(3)}</span>
            </p>
            <p>
              <span className={styles.labels}>Valor da parcela </span>
              <span className={styles.installment}>R$ {letterCredit.regular_installment_value.toFixed(2)}</span>
            </p>
            <p>
              <span className={styles.labels}>Valor da parcela flex </span>
              <span className={styles.installmentFlex}>R$ {letterCredit.flex_installment_value.toFixed(2)}</span>
            </p>
            <p>
              <span className={styles.labels}>Prazo </span>
              <span className={styles.deadline}>{letterCredit.duration} meses</span>
            </p>
            <p>
              <span className={styles.labels}>Taxa de administração </span>
              <span className={styles.percents}>{letterCredit.administration_fee.toFixed(2)}% am</span>
            </p>
            <p>
              <span className={styles.labels}>Fundo de reserva </span>
              <span className={styles.percents}>{letterCredit.reserve_fee.toFixed(2)}% am</span>
            </p>
            <p>
              <span className={styles.labels}>Seguro prestamista (opcional) </span>
              <span className={styles.percents}>{letterCredit.insurance_fee.toFixed(2)}% am</span>
            </p>

            <div className={styles.info} title='clique aqui e veja os detalhes'>
              <Info
                icon={InfoImg}
                alt={'clique aqui e veja os detalhes'}
                classImg={styles.infoImg}
                title='Leia todos os detalhes das taxas e seguros'
                body={
                  <div>
                    <h4 className={styles.modalSubtitle}>Valor da Parcela</h4>
                    <p className={styles.modalText}>Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora.</p>

                    <h4 className={styles.modalSubtitle}>Valor da Parcela Flex</h4>
                    <p className={styles.modalText}>Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora.</p>

                    <h4 className={styles.modalSubtitle}>Prazo</h4>
                    <p className={styles.modalText}>Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora.</p>

                    <h4 className={styles.modalSubtitle}>Taxa de administração</h4>
                    <p className={styles.modalText}>Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora.</p>

                    <h4 className={styles.modalSubtitle}>Fundo de reserva</h4>
                    <p className={styles.modalText}>Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora.</p>

                    <h4 className={styles.modalSubtitle}>Seguro Prestamista</h4>
                    <p className={styles.modalText}>Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora.</p>
                  </div>
                }>
                <span className={styles.infoText}>Leia todos os detalhes das taxas e seguros</span>
              </Info>
            </div>

            <div className={styles.car}>
              <div className={styles.carInfo}>
                <p className={styles.carReference}>Veículo de referência</p>
                <p className={styles.carModel}>{`${letterCredit.vehicle.Marca.nome} ${letterCredit.vehicle.Modelo.nome}`}</p>
                <p className={styles.carAdvice}>*O veículo é referência do bem adquirido. </p>
              </div>
              <div className={styles.carImg}>
                <img
                  src={letterCredit.vehicle.Fotos[0].caminho}
                  alt={'veiculo'} />
              </div>
            </div>

            <p className={styles.advice}>
              Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora, ela será reajustada. Isso garante que a carta de crédito que você esta comprando hoje tenha a valorização até a contemplação. *
          </p>
          </div>
        )
      }
    </section>
  )
}

Summary.propTypes = {
  letterCredit: PropTypes.object.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Summary)