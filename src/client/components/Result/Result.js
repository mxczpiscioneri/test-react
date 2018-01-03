import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLetterCreditById } from '../../actions/lettersCreditActions'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Plans from '../Plans/Plans'
import LettersCredit from '../LettersCredit/LettersCredit'
import ListCars from '../ListCars/ListCars'
import Footer from '../Footer/Footer'
import styles from './result.css'
import SimulateFast from '../SimulateFast/SimulateFast'

class Result extends Component {
  componentWillMount() {
    if (this.props.params) {
      this.props.getLetterCreditById(this.props.params.id)
    }
  }
  
  render() {
    return (
      <div>
        <Header />

        <Menu />

        <SimulateFast showTitle padding />

        <Plans letterCredit={this.props.letterCredit}/>

        <LettersCredit
          title={
            <h3 className={styles.lettersTitle}>Com base na sua simulação,<br /> preparamos outras opções pra você</h3>
          }
          count={3}
          size={{ xs: 12, md: 10 }}
          offset={{ md: 1 }}
          showButton={false} />

        <ListCars />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  letterCredit: store.lettersCreditReducer.letterCredit.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLetterCreditById
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result)