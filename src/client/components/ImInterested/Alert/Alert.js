import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import { renderToStaticMarkup } from 'react-dom/server'
import SweetAlert from 'sweetalert-react'
import CheckImg from './check.svg'
import styles from './alert.css'

const content = props => {
  return (
    <div className={styles.container}>
      <img
        src={CheckImg}
        alt='check' />
      <div className={styles.titleContainer}>
        <p className={styles.title}>Obrigado, <span className={styles.userName}>Nome do Usuário</span></p>
        <p className={styles.subTitle}>Em breve entraremos em contato com você, aguarde :)</p>
      </div>
      <button type='button' className={styles.button} onClick={props.onConfirm}>Voltar para home</button>
    </div>
  )
}

const Alert = props => {
  return (
    <SweetAlert
      show={props.show}
      title={``}
      html
      showConfirmButton={false}
      text={renderToStaticMarkup(content(props))}/>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Alert)