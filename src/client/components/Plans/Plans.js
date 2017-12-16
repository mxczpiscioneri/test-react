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
              <h3 className={styles.title}>Já consigo ter uma ideia do que você precisa  :)</h3>
              <p className={styles.subTitle}>Veja abaixo alguns planos que separei pra você!</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={5} offset={{ sm: 1 }}>
              <Row>
                <Col xs={12}>
                  <p className={styles.consortium}><img src={Star} alt='Consórcio Escolhido' /> Consórcio Escolhido</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={5} className={styles.normal}>
                  <label>Parcela normal</label>
                  <span>R$ 1.200</span>
                </Col>
                <Col xs={12} sm={5} className={styles.flex}>
                  <label>Parcela flex</label>
                  <span>R$ 700,00</span>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <button onClick={this.submitForm} className={styles.btn}>TENHO INTERESSE</button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6}>
                  <p className={styles.text}>Valor do veículo <strong>R$ 45.000</strong></p>
                </Col>
                <Col xs={12} sm={6}>
                  <p className={styles.text}>Prazo <strong>72 Meses</strong></p>
                </Col>
              </Row>

            </Col>
            <Col xs={12} sm={4}>
              <p className={styles.suggestions}>Sugestão de <span>veículos</span> que você poderá comprar *</p>
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