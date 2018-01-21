import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  searchLettersCredit,
  getVehiclesByIds
} from '../../actions/resultActions'
import {
  changeType,
  changeFullValue,
  changeInstallmentValue
} from '../../actions/simulateFastActions'
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

    if (id) {
      this.props.searchLettersCredit(null, null, 4, id)
    } else {
      let type = ''
      if (this.props.location.pathname.indexOf('/veiculo/') > -1) {
        type = 'value'
        this.props.changeType(2)
        this.props.changeFullValue(value)
      } else {
        type = 'installment'
        this.props.changeType(1)
        this.props.changeInstallmentValue(value)
      }

      this.props.searchLettersCredit(type, value, 4)
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((this.props.letterCredit && nextProps.letterCredit)
      && (this.props.letterCredit.id !== nextProps.letterCredit.id)) {
      if (nextProps.letterCredit.catalog_info && nextProps.letterCredit.catalog_info.vehicles_referenceds) {
        this.props.getVehiclesByIds(nextProps.letterCredit.catalog_info.vehicles_referenceds.top)
        this.props.getVehiclesByIds(nextProps.letterCredit.catalog_info.vehicles_referenceds.others, true)
      }
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
  searchLettersCredit,
  getVehiclesByIds,
  changeType,
  changeFullValue,
  changeInstallmentValue,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result)