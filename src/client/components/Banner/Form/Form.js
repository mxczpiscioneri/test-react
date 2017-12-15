import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrencyInput from 'react-currency-input';
import styles from './form.css'
import { Hidden } from '../../Grid/Grid';

class Form extends Component {
  constructor() {
    super()
  }

  submitForm = (e) => {
    e.preventDefault()
    window.location = '/resultado'
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.submitForm}>
        <div className={styles.tab}>
          <div className={styles.radio}>
            <input type="radio" id="option1" name="radio-group" defaultChecked />
            <label htmlFor="option1">Valor da Parcela</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="option2" name="radio-group" />
            <label htmlFor="option2">Valor do Veículo</label>
          </div>
          <Hidden xs>
            <span>Sabia que você pode contratar mais de uma carta de crédito?</span>
          </Hidden>
        </div>
        <div className={styles.form_content}>
          <div className={styles.form_group}>
            <label>Quanto você pode <span>pagar</span> na parcela ?</label>
            <CurrencyInput
              className={styles.input}
              prefix="R$ "
              decimalSeparator=","
              thousandSeparator="." />
          </div>
          <button type="submit" className={styles.btn_submit}>Simular</button>
        </div>
        <p>mínimo: R$ 500  |  máximo: R$ 2.000</p>
      </form>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)