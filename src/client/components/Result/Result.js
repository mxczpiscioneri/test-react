import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import styles from './result.css'
import SimulateAgain from './SimulateAgain/SimulateAgain'
import LettersCredit from '../LettersCredit/LettersCredit'

const Result = props => {
  return (
    <div>
      <Header />

      <Menu />

      <SimulateAgain/>

      <LettersCredit title={false} count={3}/>

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result)