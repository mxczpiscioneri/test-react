import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getLetterCreditById,
  searchLettersCredit,
  getVehiclesByIds
} from '../../actions/resultActions'
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
    const { id, value } = this.props.params;
    const type = 
      (this.props.location.pathname.indexOf('/veiculo/') > -1)
        ? 'value'
        : (this.props.location.pathname.indexOf('/parcela/') > -1) ? 'installment' : '';

    if (id) {
      this.props.getLetterCreditById(id)
    } else {
      this.props.searchLettersCredit(type, value, 4)
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.letterCredit && nextProps.letterCredit)
      && (this.props.letterCredit.id !== nextProps.letterCredit.id)) {
      this.props.getVehiclesByIds(nextProps.letterCredit.catalog_info.vehicles_referenceds.top)
      this.props.getVehiclesByIds(nextProps.letterCredit.catalog_info.vehicles_referenceds.others, true)

      if (nextProps.params.id) {
        this.props.searchLettersCredit('value', nextProps.letterCredit.full_value, 4, nextProps.params.id)
      }
    } else if (!nextProps.params.id && (nextProps.lettersCredit && nextProps.lettersCredit.length > 0)
      && this.props.lettersCredit !== nextProps.lettersCredit) {
      this.props.getLetterCreditById(nextProps.lettersCredit[0].id)
    }
  }

  render() {
    return (
      <div>
        <Header />

        <Menu />

        <SimulateFast showTitle padding />

        <Plans
          letterCredit={this.props.letterCredit}
          vehicles={this.props.topVehicles}
          onSubmit={(id) =>
            this.props.router.push(`/tenho-interesse/${id}`)
          }
        />

        <LettersCredit
          title={
            <h3 className={styles.lettersTitle}>Com base na sua simulação,<br /> preparamos outras opções pra você</h3>
          }
          list={this.props.lettersCredit}
          count={3}
          size={{ xs: 12, md: 10 }}
          offset={{ md: 1 }}
          showButton={false}
          onClick={(id) => this.props.router.push(`/resultado/${id}`)} />

        <ListCars
          vehicles={this.props.otherVehicles}
        />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  letterCredit: store.resultReducer.letterCredit.content,
  lettersCredit: store.resultReducer.lettersCredit.content,
  topVehicles: store.resultReducer.topVehicles.content,
  otherVehicles: store.resultReducer.otherVehicles.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLetterCreditById,
  searchLettersCredit,
  getVehiclesByIds
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result)