import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import { renderToStaticMarkup } from 'react-dom/server'
import SweetAlert from 'sweetalert-react'
import CheckImg from './check.svg'
import styles from './alertError.css'

const content = props => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Atenção!</p>
      <p className={styles.text}>{props.message}</p>
    </div>
  )
}

const AlertError = props => {
  return (
    <SweetAlert
      show={props.show}
      title={``}
      html
      showConfirmButton={true}
      confirmButtonText={'Ok'}
      showCancelButton={true}
      cancelButtonText={'×'}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      text={renderToStaticMarkup(content(props))} />
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AlertError)