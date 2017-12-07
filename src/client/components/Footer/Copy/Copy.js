import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './copy.css'
import logoBankImg from './logo-santander-footer.svg'

const Copy = props => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Container gutter={true}>
          <Row>
            <Col xs={8} sm={8} md={6} lg={6} xl={6}>
              <span className={styles.text}>© 1995-{new Date().getFullYear()} WM1 Webmotors S.A. Todos os direitos reservados.</span>
            </Col>
            <Col xs={4} sm={4} md={6} lg={6} xl={6}>
              <div className={styles.company}>
                <span className={styles.companyName}>Uma empresa </span>
                <img
                  className={styles.companyImage}
                  src={logoBankImg}
                  alt='Santander'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Copy)