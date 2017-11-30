import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import styles from './about.css'

const About = props => {
  return (
    <div>
      <Header />

      <Menu />

      <Container>
        <Row>
          <Col xs={12}>
            <h3>About</h3>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)