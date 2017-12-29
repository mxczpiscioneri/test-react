import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
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
          <Hidden sm md lg xl>
            <Row>
              <Col xs={6} className={styles.normal}>
                <label>Parcela normal</label>
                <span>72 x R$ 1.300</span>
              </Col>
              <Col xs={6} className={styles.flex}>
                <label>Parcela flex</label>
                <span>72 x R$ 900,00</span>
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
          </Hidden>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Plans)