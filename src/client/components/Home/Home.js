import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import styles from './home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <Menu />

        <Container className={styles.container} gutter={true}>
          <Row>
            <Col xs={12}>
            </Col>
          </Row>

        </Container>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
