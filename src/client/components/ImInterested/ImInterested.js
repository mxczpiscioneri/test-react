import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import { getLetterCreditById } from '../../actions/interestedActions'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Summary from './Summary/Summary'
import SummaryMobile from './Summary/SummaryMobile'
import Form from './Form/Form'
import FormMobile from './Form/FormMobile'
import styles from './imInterested.css'

class ImInterested extends React.Component {
  componentWillMount() {
    const id = this.props.params.id
    this.props.getLetterCreditById(id)
  }

  render() {
    const letterCredit = this.props.letterCredit

    return (
      <div>
        <Header />

        <Menu notSticky />

        <section className={styles.container}>
          <Container>
            <Row>
              <Hidden xs>
                <Col xs={12} md={10} offset={{ md: 1 }}>
                  <h3 className={styles.title}>Legal, agora falta pouco!</h3>
                  <h2 className={styles.subTitle}>Por favor, deixe seus dados para ligamos para você.</h2>
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
}

const mapStateToProps = store => ({
  letterCredit: store.interestedReducer.interested.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLetterCreditById
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ImInterested)