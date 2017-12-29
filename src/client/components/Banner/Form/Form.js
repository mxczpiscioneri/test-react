import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './form.css'
import { Hidden } from '../../Grid/Grid';
import InputDecimal from '../../InputDecimal/InputDecimal'
import { reduxForm } from 'redux-form'
import Info from '../../Info/Info'
import IconInfo from './info.svg'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      valueChecked: 'plotValue',
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    window.location = '/resultado'
  }

  handleOptionChange = (changeEvent) => {
    this.setState({ valueChecked: changeEvent.target.value })
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.submitForm} name="form">
        <div className={styles.tab}>
          <div className={styles.radio}>
            <input type="radio" id="option1" name="radio-group" value="plotValue" onChange={this.handleOptionChange} defaultChecked />
            <label htmlFor="option1">Valor da Parcela</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="option2" name="radio-group" value="vehicleValue" onChange={this.handleOptionChange} />
            <label htmlFor="option2">Valor do Veículo</label>
          </div>
          <Hidden xs sm>
            <span className={styles.infoContainer}>
              Sabia que você pode contratar mais de uma carta de crédito?
              <Info icon={IconInfo} alt={'clique aqui e veja os detalhes'} className={styles.info} />
            </span>
          </Hidden>
        </div>
        <div className={styles.form_content}>
          <div className={styles.form_group}>
            <InputDecimal
              name='value'
              label={
                this.state.valueChecked === "plotValue" ?
                  <label>Quanto você pode <span>pagar</span> na parcela?</label> :
                  <label>Quanto você pode <span>pagar</span> no veículo?</label>
              } />
          </div>
          <button type="submit" className={styles.btn_submit}>Simular</button>
        </div>
        <Hidden xs sm>
          <p>mínimo: R$ 500  |  máximo: R$ 2.000</p>
        </Hidden>
      </form>
    )
  }
}

const validate = (values) => { }

const InitializeFromStateForm = reduxForm({
  validate,
  form: 'form'
})(Form)

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InitializeFromStateForm)