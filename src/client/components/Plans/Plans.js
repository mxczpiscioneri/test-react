import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Cars from './Cars/Cars'
import styles from './plans.css'
import Star from './icone-estrela.svg';

class Plans extends React.Component {
  constructor() {
    super()

    this.state = {
      played: false
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    window.location = '/tenho-interesse'
  }

  render() {
    return (
      <section className={styles.container}>
        <Container>
          <Row>
            <Col xs={12}>
              <h3 className={styles.title}>Resultado da sua simulação</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={5} offset={{ sm: 1 }}>
              <p className={styles.textResult}>Você terá uma carta de crédito de R$ <span>45.000,00</span> pagando apenas <span>R$ 1.200</span> por <span>72</span> meses.</p>
              <p className={styles.textResult}>Caso queira pagar só <span className={styles.green}>R$ 700</span> nos primeiros meses, não deixe de optar pelo plano Flex!</p>
              <p className={styles.textResult}>Valor do veículo R$ 45.000 <span className={styles.light}>Prazo 72 Meses</span></p>
              <button onClick={this.submitForm} className={styles.btn}>TENHO INTERESSE</button>
            </Col>
            <Col xs={12} sm={4}>
              <p className={styles.suggestions}>Sugestão de <span>veículos</span> que você poderá comprar com a carta escolhida.</p>
              <Cars />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Plans)