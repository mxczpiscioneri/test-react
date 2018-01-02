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
import styles from './formMobile.css'

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
    errors.cpf = 'Preencha seu CPF/CNPJ'
  }

  return errors
}

class FormMobile extends React.Component {
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
      <section>
        <div className={styles.container}>
          <h4 className={styles.formOrientation}>Preencha os campos do formulário abaixo:</h4>
          <form onSubmit={this._submit} name='formMobile'>
            <Input label='Seu nome' name='name' />
            <InputPhone label='Seu telefone' name='phone' />
            <Input label='Seu e-mail' name='email' />
            <InputCpf label='*CPF/CNPJ' name='cpf' />
            <RadioButtonGroup name='installment'>
              <RadioButton value='normal' label='Parcela normal' />
              <RadioButton value='flex' label='Parcela flex' />
            </RadioButtonGroup>
            <Checkbox name='validate' label='*Ao enviar o formulário eu concordo com a validação do meu CPF.' />
            <Alert show={this.state.alert} onConfirm={() => {
              window.location = '/'
            }} />
          </form>
        </div>
        <button type='submit' className={styles.button}>ME LIGUE</button>
      </section>
    )
  }
}

const InitializeFromStateForm = reduxForm({
  validate,
  form: 'formMobile'
})(FormMobile)

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InitializeFromStateForm)