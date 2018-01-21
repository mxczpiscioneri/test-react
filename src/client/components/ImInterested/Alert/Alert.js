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
      <p className={styles.title}>Obrigado, <span className={styles.userName}>{props.userName}</span></p>
      <p className={styles.text}>Nos falaremos neste telefone, agora é só aguardar um pouquinho.</p>
      <p className={styles.text}>Veja agora o período que ligaremos:</p>
      <p className={styles.text}>Segunda à Sexta - 9hs às 21hs<br />Sábado - 10hs às 14hs</p>
    </div>
  )
}

const Alert = props => {
  return (
    <SweetAlert
      show={props.show}
      title={``}
      html
      showConfirmButton={true}
      confirmButtonText={'Enquanto isso, Você pode ir procurando seu carro :)'}
      showCancelButton={true}
      cancelButtonText={'×'}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      text={renderToStaticMarkup(content(props))} />
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Alert)