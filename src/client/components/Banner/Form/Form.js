import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './form.css'
import { Hidden } from '../../Grid/Grid'
import InputDecimal from '../../InputDecimal/InputDecimal'
import { reduxForm } from 'redux-form'
import Info from '../../Info/Info'
import IconInfo from './info.svg'
import { redirect } from '../../../actions/resultActions'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      valueChecked: 'installmentValue',
      fullValue: {
        min: 'R$ 10.000',
        max: 'R$ 90.000',
      },
      installmentValue: {
        min: 'R$ 500',
        max: 'R$ 2.000',
      },
    }
  }

  submitForm = (e) => {
    e.preventDefault()

    let value = e.target.value.value
    value = value.replace('R$ ', '').replace('.', '').replace(',', '.')

    if (this.state.valueChecked === "installmentValue") {
      this.props.redirect(`/resultado/parcela/${value}`)
    } else {
      this.props.redirect(`/resultado/veiculo/${value}`)
    }
  }

  handleOptionChange = (changeEvent) => {
    this.setState({ valueChecked: changeEvent.target.value })
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.submitForm} name="form">
        <div className={styles.tab}>
          <div className={styles.radio}>
            <input type="radio" id="installmentValue" name="radio-group" value="installmentValue" onChange={this.handleOptionChange} defaultChecked />
            <label htmlFor="installmentValue">Valor da Parcela</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="fullValue" name="radio-group" value="fullValue" onChange={this.handleOptionChange} />
            <label htmlFor="fullValue">Valor do Veículo</label>
          </div>
          <Hidden xs sm>
            <span className={styles.infoContainer}>
              Sabia que você pode contratar mais de uma carta de crédito?
              <Info
                icon={IconInfo}
                alt={'clique aqui e veja os detalhes'}
                className={styles.info}
                title='Sabia que você pode contratar mais de uma carta de crédito?'
                body={
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                } />
            </span>
          </Hidden>
        </div>
        <div className={styles.form_content}>
          <div className={styles.form_group}>
            <InputDecimal
              name='value'
              label={
                this.state.valueChecked === "installmentValue" ?
                  <label>Quanto você pode <span>pagar</span> na parcela?</label> :
                  <label>Quanto você pode <span>pagar</span> no veículo?</label>
              } />
          </div>
          <button type="submit" className={styles.btn_submit}>Simular</button>
        </div>
        <Hidden xs sm>
          <p>mínimo: {(this.state.valueChecked === "installmentValue") ? this.state.installmentValue.min : this.state.fullValue.min}  |  máximo: {(this.state.valueChecked === "installmentValue") ? this.state.installmentValue.max : this.state.fullValue.max}</p>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ redirect }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InitializeFromStateForm)