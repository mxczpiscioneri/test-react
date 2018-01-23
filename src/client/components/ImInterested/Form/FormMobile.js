import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import Input from '../../Input/Input'
import InputPhone from '../../InputPhone/InputPhone'
import InputCpf from '../../InputCpf/InputCpf'
import RadioButtonGroup from '../../RadioButtonGroup/RadioButtonGroup'
import RadioButton from '../../RadioButton/RadioButton'
import Checkbox from '../../Checkbox/Checkbox'
import Alert from '../Alert/Alert'
import { isEmail } from 'validator'
import styles from './formMobile.css'
import { sendForm, closeAlert, redirect } from '../../../actions/interestedActions'

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Preencha seu nome'
  }

  if (!values.telephone) {
    errors.telephone = 'Preencha seu telefone'
  }

  if (!values.email) {
    errors.email = 'Preencha seu e-mail'
  } else if (!isEmail(values.email)) {
    errors.email = 'E-mail inválido'
  }

  if (!values.cpf) {
    errors.cpf = 'Preencha seu CPF/CNPJ'
  }

  if (!values.choice_of_plan) {
    errors.choice_of_plan = 'Escolha um plano'
  }

  if (!values.validate) {
    errors.validate = 'Aceite o termo'
  }

  return errors
}

class FormMobile extends React.Component {
  _submit = (event) => {
    event.preventDefault()

    this.userName = event.target.name.value

    const form = {
      letter_of_credit_id: this.props.letter_of_credit_id,
      name: event.target.name.value,
      telephone: event.target.telephone.value,
      email: event.target.email.value,
      cpf: event.target.cpf.value,
      cnpj: event.target.cpf.value,
      choice_of_plan: event.target.choice_of_plan.value,
      opt_for_insurance: event.target.opt_for_insurance.value,
    }

    if (event.target.cpf.value.length === 14) {
      delete form.cnpj
    } else {
      delete form.cpf
    }

    this.props.sendForm(form)
  }

  render() {
    return (
      <section>
        <div className={styles.container}>
          <h4 className={styles.formOrientation}>Preencha os campos do formulário abaixo:</h4>
          <form onSubmit={this._submit} name='formMobile'>
            <Input label='Seu nome' name='name' required />
            <InputPhone label='Seu telefone' name='telephone' required />
            <Input label='Seu e-mail' name='email' required />
            <InputCpf label='*CPF/CNPJ' name='cpf' required />
            <label className={styles.conditions}>Escolha as condições de sua parcela:</label>
            <RadioButtonGroup name='choice_of_plan'>
              <RadioButton value='regular' label='Parcela normal' />
              <RadioButton value='flex' label='Parcela flex' />
            </RadioButtonGroup>
            <RadioButtonGroup name='opt_for_insurance'>
              <RadioButton value={1} label='Com seguro' />
              <RadioButton value={0} label='Sem seguro' />
            </RadioButtonGroup>
            <Checkbox name='validate' label='*Ao enviar o formulário eu concordo com a validação do meu CPF.' required />
            <button type='submit' className={styles.button}>ME LIGUE</button>
            <Alert
              userName={this.userName}
              show={this.props.formResult.send}
              onConfirm={() => {
                this.props.closeAlert()
                window.location = 'https://www.webmotors.com.br'
              }}
              onCancel={() => {
                this.props.closeAlert()
                this.props.redirect('/')
              }} />
          </form>
        </div>
      </section>
    )
  }
}

const InitializeFromStateForm = reduxForm({
  validate,
  form: 'formMobile',
  initialValues: { validate: true, choice_of_plan: 'regular', opt_for_insurance: 1 }
})(FormMobile)

const mapStateToProps = state => {
  return {
    formResult: state.interestedReducer.form
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendForm, closeAlert, redirect }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InitializeFromStateForm)