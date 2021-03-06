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
import AlertError from '../AlertError/AlertError'
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
  } else if (values.telephone.replace(/[^a-zA-Z0-9]/g, '').length < 10) {
    errors.telephone = 'Preencha um telefone válido'
  }

  if (!values.email) {
    errors.email = 'Preencha seu e-mail'
  } else if (!isEmail(values.email)) {
    errors.email = 'E-mail inválido'
  }

  if (!values.cpf) {
    errors.cpf = 'Preencha seu CPF/CNPJ'
  } else if ((values.cpf.replace(/[^a-zA-Z0-9]/g, '').length !== 11)
    && (values.cpf.replace(/[^a-zA-Z0-9]/g, '').length !== 14)) {
    errors.cpf = 'Preencha um CPF/CNPJ válido'
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
  _submit = (values) => {
    _satellite.track('propostaConsorcioEnviada')

    this.userName = values.name

    const form = {
      letter_of_credit_id: this.props.letter_of_credit_id,
      name: values.name,
      telephone: values.telephone.replace(/[^a-zA-Z0-9]/g, ''),
      email: values.email,
      cpf: values.cpf.replace(/[^a-zA-Z0-9]/g, ''),
      cnpj: values.cpf.replace(/[^a-zA-Z0-9]/g, ''),
      choice_of_plan: values.choice_of_plan,
      opt_for_insurance: values.opt_for_insurance,
    }

    if (form.cpf.length === 14) {
      delete form.cpf
    } else {
      delete form.cnpj
    }

    this.props.sendForm(form)
  }

  render() {
    const { handleSubmit } = this.props
    const isSubmitting = this.props.formResult.isSubmitting

    return (
      <section>
        <div className={styles.container}>
          <h4 className={styles.formOrientation}>Preencha os campos do formulário abaixo:</h4>
          <form onSubmit={handleSubmit(this._submit)} name='formMobile'>
            <Input label='Seu nome' name='name' />
            <InputPhone label='Seu telefone' name='telephone' />
            <Input label='Seu e-mail' name='email' />
            <InputCpf label='*CPF/CNPJ' name='cpf' />
            <label className={styles.conditions}>Escolha as condições de sua parcela:</label>
            <RadioButtonGroup name='choice_of_plan'>
              <RadioButton value='regular' label='Parcela normal' />
              <RadioButton value='flex' label='Parcela flex' />
            </RadioButtonGroup>
            <RadioButtonGroup name='opt_for_insurance'>
              <RadioButton value={1} label='Com seguro' />
              <RadioButton value={0} label='Sem seguro' />
            </RadioButtonGroup>
            <Checkbox name='validate' label='*Ao clicar em ME LIGUE, eu concordo em compartilhar estes dados com a Webmotors e Santander Brasil Administradora de Consórcio, bem como autorizo o contato telefônico e validação do meu CPF.' required />
            <button type='submit' className={styles.button} disabled={isSubmitting}>ME LIGUE</button>
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
            <AlertError
              userName={this.userName}
              show={this.props.formResult.send && this.props.formResult.error !== ''}
              message={this.props.formResult.error}
              onConfirm={() => {
                this.props.closeAlert()
              }}
              onCancel={() => {
                this.props.closeAlert()
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