import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { Container } from '../../Grid/Grid'
import routePaths from '../../../constants/routes'
import styles from './copy.css'
import logoBankImg from '../logo-bank.svg'

const Copy = props => {
  return (
    <div className={styles.container}>
      <Container gutter={true}>
        <div className={styles.content}>
          <span className={styles.text}>© 1995-{new Date().getFullYear()} WM1 Webmotors S.A. Todos os direitos reservados.</span>
          <div className={styles.company}>
            <span>Uma empresa </span>
            <img
              className={styles.companyImage}
              src={logoBankImg}
              alt='Santander'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Copy)