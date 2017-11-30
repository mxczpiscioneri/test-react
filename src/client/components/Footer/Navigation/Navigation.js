import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import routePaths from '../../../constants/routes'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './navigation.css'
import logoImg from '../logo.svg'

const Navigation = props => {
  return (
    <section className={styles.container}>
      <Container gutter={true}>
        <Row>
          <Col xs={12} sm={12} md={1} lg={1} xl={1}>
            <div className={styles.logo}>
              <Link to={routePaths.root.path}>
                <img
                  src={logoImg}
                  alt='Web motors'
                />
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7} xl={7}>
            <nav className={styles.navigation}>
              <Link to={routePaths.howItWorks.path}>{routePaths.howItWorks.title}</Link>
              <Link to={routePaths.benefits.path}>{routePaths.benefits.title}</Link>
              <Link to={routePaths.faq.path}>{routePaths.faq.title}</Link>
              <Link to={routePaths.attendance.path}>{routePaths.attendance.title}</Link>
            </nav>
          </Col>
          <Col xs={12} sm={12} md={5} lg={5} xl={5}>
            <div className={styles.socialNetworks}>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)