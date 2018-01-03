import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import { getVehiclesByIds } from '../../actions/vehiclesActions'
import Cars from './Cars/Cars'
import styles from './plans.css'
import Star from './icone-estrela.svg';

class Plans extends React.Component {
  submitForm = (e) => {
    e.preventDefault()
    window.location = `/tenho-interesse/${this.props.letterCredit.id}`
  }

  componentWillReceiveProps (nextProps) {
    if ((this.props.letterCredit !== nextProps.letterCredit) && nextProps.letterCredit) {
      this.props.getVehiclesByIds(nextProps.letterCredit.catalog_info.vehicles_referenceds.top)
    }
  }

  render() {
    const letterCredit = this.props.letterCredit

    return (
      <section className={styles.container}>
        <Container>
          <Hidden sm md lg xl>
            <Row>
              <Col xs={6} className={styles.normal}>
                <label>Parcela normal</label>
                <span>${letterCredit.duration} x R$ {letterCredit.regular_installment_value}</span>
              </Col>
              <Col xs={6} className={styles.flex}>
                <label>Parcela flex</label>
                <span>{letterCredit.duration} x R$ {letterCredit.flex_installment_value}</span>
              </Col>
              <Col xs={12}>
                <button onClick={this.submitForm} className={styles.btn}>TENHO INTERESSE</button>
                <hr className={styles.separator} />
              </Col>
              <Col xs={12}>
                <h3 className={styles.titleSuggestions}>Sugestões de veículos que você poderá <span>comprar</span>*</h3>
                <Cars />
              </Col>
            </Row>
          </Hidden>
          <Hidden xs>
            <Row>
              <Col xs={12}>
                <h3 className={styles.title}>Resultado da sua simulação</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={5} offset={{ sm: 1 }}>
                <p className={styles.textResult}>Você terá uma carta de crédito de R$ <span>{letterCredit.full_value}</span> pagando apenas <span>R$ {letterCredit.regular_installment_value}</span> por <span>{letterCredit.duration}</span> meses.</p>
                <p className={styles.textResult}>Caso queira pagar só <span className={styles.green}>R$ ${letterCredit.flex_installment_value}</span> nos primeiros meses, não deixe de optar pelo plano Flex!</p>
                <p className={styles.textResult}>Valor do veículo R$ {letterCredit.full_value} <span className={styles.light}>Prazo {letterCredit.duration} Meses</span></p>
                <p className={styles.textResult}>Parcela Normal com seguro R$ <span>{letterCredit.regular_installment_safe_value}</span><br />Parcela Flex com seguro R$ <span>${letterCredit.flex_installment_safe_value}</span></p>
                <button onClick={this.submitForm} className={styles.btn}>TENHO INTERESSE</button>
              </Col>
              <Col xs={12} sm={4}>
                <p className={styles.suggestions}>Sugestão de <span>veículos</span> que você poderá comprar com a carta escolhida.</p>
                <Cars vehicles={this.props.vehicles}/>
              </Col>
            </Row>
          </Hidden>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = store => ({
  vehicles: store.vehiclesReducer.vehicles.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getVehiclesByIds
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Plans)