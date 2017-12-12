import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Plans from '../Plans/Plans'
import LettersCredit from '../LettersCredit/LettersCredit'
import ListCars from '../ListCars/ListCars'
import Footer from '../Footer/Footer'
import styles from './result.css'
import SimulateAgain from './SimulateAgain/SimulateAgain'

const Result = props => {
  return (
    <div>
      <Header />

      <Menu />

      <SimulateAgain />

      <Plans />

      <LettersCredit 
        title={false} 
        count={3} 
        size={{ xs: 12, md: 10 }} 
        offset={{ md: 1 }} />

      <ListCars />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result)