import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NumberFormat from 'react-number-format'
import { Container, Row, Col } from '../../Grid/Grid'
import Info from '../../Info/Info'
import styles from './summary.css'
import InfoImg from './info.svg'
import InfoImgSmall from './infoSmall.svg'

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
              <span className={styles.value}><NumberFormat value={letterCredit.full_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
            </p>
            <p>
              <span className={styles.labels}>Valor da parcela </span>
              <span className={styles.installment}>R$ <NumberFormat value={letterCredit.regular_installment_safe_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
            </p>
            <p>
              <span className={styles.labels}>Valor da parcela sem seguro </span>
              <span className={styles.installment}>R$ <NumberFormat value={letterCredit.regular_installment_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
            </p>
            <p>
              <span className={styles.labels}>Valor da parcela flex </span>
              <span className={styles.installmentFlex}>R$ <NumberFormat value={letterCredit.flex_installment_safe_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
            </p>
            <p>
              <span className={styles.labels}>Valor da parcela flex sem seguro </span>
              <span className={styles.installmentFlex}>R$ <NumberFormat value={letterCredit.flex_installment_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
            </p>
            <p>
              <span className={styles.labels}>Prazo </span>
              <span className={styles.deadline}>{letterCredit.duration} meses</span>
              <Info
                icon={InfoImgSmall}
                alt='clique aqui e veja os detalhes'
                className={styles.infoSmall}
                title='Prazo'
                body={
                  <p><b>Prazo igual a 72 meses:</b> trata-se de um grupo em formação, onde ainda não foi inaugurado. No prazo máximo de 90 dias, será inaugurado e você poderá ofertar lances e participar dos sorteios mensais.<br /><b>Prazo menor que 72 meses:</b> são grupos em andamento, onde já ocorrem assembleias para oferta de lances e sorteios mensais.</p>
                } />
            </p>
            <p>
              <span className={styles.labels}>Taxa de administração </span>
              <span className={styles.percents}><NumberFormat value={letterCredit.administration_fee} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} />% ao período</span>
            </p>
            <p>
              <span className={styles.labels}>Fundo de reserva </span>
              <span className={styles.percents}><NumberFormat value={letterCredit.reserve_fee} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} />% ao período</span>
            </p>
            <p>
              <span className={styles.labels}>Seguro prestamista (opcional) </span>
              <span className={styles.percents}><NumberFormat value={letterCredit.insurance_fee} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} />% ao mês</span>
            </p>

            <div className={styles.info} title='clique aqui e veja os detalhes' onClick={() => _satellite.track('detalhesTaxasSeguros')}>
              <Info
                icon={InfoImg}
                alt={'clique aqui e veja os detalhes'}
                classImg={styles.infoImg}
                title='Leia todos os detalhes das taxas e seguro'
                body={
                  <div>
                    <h4 className={styles.modalSubtitle}>Plano Flex</h4>
                    <p className={styles.modalText}>Você pode reduzir o valor das suas parcelas em até 30%. Vale até a contemplação ou até a metade do plano (o que ocorrer primeiro). Após isso, suas parcelas serão reajustadas somando-se o valor que você pagou a menos.</p>

                    <h4 className={styles.modalSubtitle}>Prazo</h4>
                    <p className={styles.modalText}><b>Prazo igual a 72 meses:</b> trata-se de um grupo em formação, onde ainda não foi inaugurado. No prazo máximo de 90 dias, será inaugurado e você poderá ofertar lances e participar dos sorteios mensais.<br /><b>Prazo menor que 72 meses:</b> são grupos em andamento, onde já ocorrem assembleias para oferta de lances e sorteios mensais.</p>

                    <h4 className={styles.modalSubtitle}>Taxa de administração</h4>
                    <p className={styles.modalText}>É a remuneração da administradora, responsável pelos serviços prestados na formação, organização e administração, desde o início do grupo até o seu encerramento.</p>

                    <h4 className={styles.modalSubtitle}>Fundo de reserva</h4>
                    <p className={styles.modalText}>É uma garantia para bom funcionamento do grupo, em caso de inadimplência de outras cotas. No fim do plano, caso não seja utilizado na totalidade, ele é devolvido proporcionalmente a cada consorciado. </p>

                    <h4 className={styles.modalSubtitle}>Seguro Prestamista</h4>
                    <p className={styles.modalText}>Garante o pagamento do saldo devedor do consorciado em caso de imprevistos, como morte ou invalidez permanente, evitando que a dívida seja repassada à família.</p>
                  </div>
                }>
                <span className={styles.infoText}>Leia todos os detalhes das taxas e seguro</span>
              </Info>
            </div>

            {letterCredit.vehicle &&
              <div className={styles.car}>
                <p className={styles.carReference}>Veículo de referência</p>
                <p className={styles.carAdvice}>O veículo é referência do bem adquirido. </p>
                <div className={styles.carImg}>
                  {letterCredit.vehicle.Fotos &&
                    <img
                      src={letterCredit.vehicle.Fotos[0].caminho}
                      alt={`Consórcio Santander - Foto Veículo ${letterCredit.vehicle.Marca.nome} ${letterCredit.vehicle.Modelo.nome}`}
                      title={`Foto Veículo ${letterCredit.vehicle.Marca.nome} ${letterCredit.vehicle.Modelo.nome}`} />
                  }
                </div>
                {
                  (letterCredit.vehicle.Marca && letterCredit.vehicle.Modelo) &&
                  <p className={styles.carModel}>{letterCredit.vehicle.Marca.nome} {letterCredit.vehicle.Modelo.nome}</p>
                }
              </div>
            }

            <p className={styles.advice}>
              Precisamos atrelar sua carta à um veículo e, sempre que o valor deste for corrigido junto à montadora, ela será reajustada. Isso garante que a carta de crédito que você esta comprando hoje tenha a valorização até a contemplação.
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