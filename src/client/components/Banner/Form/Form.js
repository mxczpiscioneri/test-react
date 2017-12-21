import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './form.css'
import { Hidden } from '../../Grid/Grid';
import InputDecimal from '../../InputDecimal/InputDecimal'
import { reduxForm } from 'redux-form';

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
      <form className={styles.form} onSubmit={this.submitForm} name="form">
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
            <Hidden xs>
              <InputDecimal
                name='value'
                label={<label>Quanto você pode <span>pagar</span> na parcela?</label>} />
            </Hidden>
            <Hidden sm md lg xl>
              <InputDecimal
                name='value'
                label={<label>Quanto você pode pagar na parcela?</label>} />
            </Hidden>
          </div>
          <button type="submit" className={styles.btn_submit}>Simular</button>
        </div>
        <Hidden xs>
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