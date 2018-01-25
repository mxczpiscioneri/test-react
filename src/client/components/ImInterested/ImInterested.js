import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import { getLetterCreditById } from '../../actions/interestedActions'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Title from '../Title/Title'
import Footer from '../Footer/Footer'
import Summary from './Summary/Summary'
import SummaryMobile from './Summary/SummaryMobile'
import Form from './Form/Form'
import FormMobile from './Form/FormMobile'
import styles from './imInterested.css'

class ImInterested extends React.Component {
  componentWillMount() {
    this.letter_of_credit_id = this.props.params.id
    this.props.getLetterCreditById(this.letter_of_credit_id)
  }

  render() {
    const letterCredit = this.props.letterCredit

    objDataLayer = {
      pageName: '/webmotors/home/tenho-interesse',
      usrID: 'md5',
      valorConsorcio: letterCredit.full_value
    }

    return (
      <div>
        <Header />

        <Menu notSticky />

        <section className={styles.container}>
          <Container>
            <Row>
              <Hidden xs>
                <Col xs={12} md={10} offset={{ md: 1 }}>
                  <Title className={styles.title}>Legal, agora falta pouco!<br />Por favor, deixe seus dados para ligarmos para você.</Title>
                </Col>
              </Hidden>
              <Hidden sm md lg xl>
                <Col xs={12} md={10} offset={{ md: 1 }}>
                  <Title className={styles.title}>Ótima escolha!<br />Envie seus dados e ligamos pra você</Title>
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
                      <Form letter_of_credit_id={this.letter_of_credit_id} />
                    </Col>
                  </Row>
                </Col>
              </Hidden>
              <Hidden sm md lg xl>
                <Col xs={12} md={10} offset={{ md: 1 }}>
                  <Row>
                    <Col xs={12} md={6}>
                      <FormMobile letter_of_credit_id={this.letter_of_credit_id} />
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