import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import routePaths from '../../../constants/routes'
import { Container } from '../../Grid/Grid'
import styles from './navigation.css'
import logoImg from '../logo.svg'

const Navigation = props => {
  return (
    <div className={styles.container}>
      <Container gutter={true}>
        <div className={styles.logo}>
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
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)