import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import Input from '../../Input/Input'
import InputPhone from '../../InputPhone/InputPhone'
import RadioButtonGroup from '../../RadioButtonGroup/RadioButtonGroup'
import RadioButton from '../../RadioButton/RadioButton'
import Checkbox from '../../Checkbox/Checkbox'
import Alert from '../Alert/Alert'
import styles from './form.css'

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Preencha seu nome'
  }

  if (!values.phone) {
    errors.phone = 'Preencha seu telefone'
  }

  if (!values.email) {
    errors.email = 'Preencha seu e-mail'
  }

  if (!values.cpf) {
    errors.cpf = 'Preencha seu CPF'
  }

  return errors
}

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      alert: false
    }
  }

  _submit = (event) => {
    event.preventDefault()
    this.setState({ alert: true })
  }

  render() {
    const props = this.props

    return (
      <section className={styles.container}>
        <form onSubmit={this._submit} name="form">
          <Input label='Nome' name='name' />
          <InputPhone label='Telefone' name='phone' />
          <Input label='E-mail' name='email' />
          <Input label='*CPF' name='cpf' />
          <RadioButtonGroup name='installment'>
            <RadioButton value='normal' label='Parcela normal' />
            <RadioButton value='flex' label='Parcela flex' />
          </RadioButtonGroup>
          <Checkbox name='validate' label='*Ao enviar o formulário eu concordo com a vadaliação do meu CPF.' />
          <button type='submit' className={styles.button}>ME LIGUE</button>
          <Alert show={this.state.alert} onConfirm={() => {
            window.location = '/'
          }} />
        </form>
      </section>
    )
  }
}

const InitializeFromStateForm = reduxForm({
  validate,
  form: 'form'
})(Form)

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InitializeFromStateForm)