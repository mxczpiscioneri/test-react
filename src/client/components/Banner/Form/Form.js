import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CurrencyInput from 'react-currency-input';
import styles from './form.css'

const Form = props => {

  return (
    <form className={styles.form}>
      <div className={styles.tab}>
        <div className={styles.radio}>
          <input type="radio" id="option1" name="radio-group" defaultChecked />
          <label htmlFor="option1">Valor da Parcela</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" id="option2" name="radio-group" />
          <label htmlFor="option2">Valor do Veículo</label>
        </div>
        <span>Sabia que você pode contratar mais de uma carta de crédito?</span>
      </div>
      <div className={styles.form_group}>
        <label>Quanto você pode <span>pagar</span> na parcela ?</label>
        <CurrencyInput
          className={styles.input}
          prefix="R$ "
          decimalSeparator=","
          thousandSeparator="." />
      </div>
      <button type="submit" className={styles.btn_submit}>Simular</button>
      <p>Valor mínimo: R$ 500  |  Valor máximo: R$ 2.000</p>
    </form>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)