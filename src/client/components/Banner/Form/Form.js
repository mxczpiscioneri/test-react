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
        min_label: 'R$ 15.394,59',
        max_label: 'R$ 134.870,00',
        min: 15394.59,
        max: 134870.00,
      },
      installmentValue: {
        min_label: 'R$ 191,36',
        max_label: 'R$ 2.201,00',
        min: 191.36,
        max: 2201.00,
      },
    }
  }

  submitForm = (e) => {
    e.preventDefault()

    let value = e.target.value.value
    value = value.replace('R$ ', '').replace('.', '').replace(',', '.')

    if (!value) return false

    if (this.state.valueChecked === "installmentValue") {
      if (value < this.state.installmentValue.min) value = this.state.installmentValue.min
      if (value > this.state.installmentValue.max) value = this.state.installmentValue.max
      this.props.redirect(`/resultado/parcela/${value}`)
    } else {
      if (value < this.state.fullValue.min) value = this.state.fullValue.min
      if (value > this.state.fullValue.max) value = this.state.fullValue.max
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
                  <p>O valor máximo para cada cota de auto é de R$ 134.870,00, porém, você pode ter mais de uma cota desde que não ultrapasse o valor de R$ 680.000,00. Para comprar um veículo, é possível juntar até 5 cotas contempladas.</p>
                } />
            </span>
          </Hidden>
        </div>
        <div className={styles.form_content}>
          <div className={styles.form_group}>
            <InputDecimal
              required
              name='value'
              label={
                this.state.valueChecked === "installmentValue" ?
                  <label>Quanto você quer <span>pagar</span> na parcela?</label> :
                  <label>Quanto você quer <span>pagar</span> no veículo?</label>
              } />
          </div>
          <button type="submit" className={styles.btn_submit}>Simular</button>
        </div>
        <Hidden xs sm>
          <p>mínimo: {(this.state.valueChecked === "installmentValue") ? this.state.installmentValue.min_label : this.state.fullValue.min_label}  |  máximo: {(this.state.valueChecked === "installmentValue") ? this.state.installmentValue.max_label : this.state.fullValue.max_label}</p>
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