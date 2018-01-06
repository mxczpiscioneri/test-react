import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Summary from './Summary/Summary'
import SummaryMobile from './Summary/SummaryMobile'
import Form from './Form/Form'
import FormMobile from './Form/FormMobile'
import styles from './imInterested.css'

const letterCredit = {
  value: 45.900,
  installment: 900,
  installmentFlex: 500,
  deadline: 72,
  rate: 0.21,
  reserveFund: 0.47,
  insurance: 0.47
}

const ImInterested = props => {
  return (
    <div>
      <Header />

      <Menu />

      <section className={styles.container}>
        <Container>
          <Row>
            <Hidden xs>
            <Col xs={12} md={10} offset={{ md: 1 }}>
              <h3 className={styles.title}>Legal, agora falta pouco!</h3>
              <h2 className={styles.subTitle}>Por favor, deixe seus dados para ligarmos pra você</h2>
            </Col>
            </Hidden>
            <Hidden sm md lg xl>
              <Col xs={12} md={10} offset={{ md: 1 }}>
                <h2 className={styles.title}>Ótima escolha! <span className={styles.subTitle}>Envie seus</span></h2>
                <h2 className={styles.subTitle}>dados e ligamos pra você</h2>
              </Col>
            </Hidden>
          </Row>
          <Row>
            <Hidden xs>
              <Col xs={12} md={10} offset={{ md: 1 }}>
                <Row>
                  <Col xs={12} md={6}>
                    <Summary letterCredit={letterCredit} />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form letter_of_credit_id={1} />
                  </Col>
                </Row>
              </Col>
            </Hidden>
            <Hidden sm md lg xl>
              <Col xs={12} md={10} offset={{ md: 1 }}>
                <Row>
                  <Col xs={12} md={6}>
                    <FormMobile letter_of_credit_id={1} />
                  </Col>
                  <Col xs={12} md={6}>
                    <SummaryMobile letterCredit={letterCredit} />
                  </Col>
                </Row>
              </Col>
            </Hidden>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ImInterested)