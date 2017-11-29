import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routePaths from '../../constants/routes'
import { Link } from 'react-router'
import { Container } from '../Grid/Grid'
import styles from './footer.css'
import logoImg from './logo.svg'
import logoBankImg from './logo-bank.svg'

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentTop}>
        <Container gutter={true}>
          <div className={styles.contentTopContainer}>
            <Link to={routePaths.root.path}>
              <img
                src={logoImg}
                alt='Web motors'
              />
            </Link>
            <div className={styles.navigation}>
              <Link to={routePaths.howItWorks.path}>{routePaths.howItWorks.title}</Link>
              <Link to={routePaths.benefits.path}>{routePaths.benefits.title}</Link>
              <Link to={routePaths.faq.path}>{routePaths.faq.title}</Link>
              <Link to={routePaths.attendance.path}>{routePaths.attendance.title}</Link>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.contentBottom}>
        <Container gutter={true}>
          <div className={styles.contentBottomContainer}>
            <span className={styles.copy}>© 1995-{ new Date().getFullYear() } WM1 Webmotors S.A. Todos os direitos reservados.</span>
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
    </footer >
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)