import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './simulateAgain.css'

const SimulateAgain = props => {
  return (
    <section className={styles.container}>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <div className={styles.title}>QUERO SIMULAR OUTRO</div>
            <div className={styles.block}>
              <div className={!(props.selected) ? styles.blockItemSelected : ''}>Valor da Parcela</div>
              <div className={(props.selected) ? styles.blockItemSelected : ''}>Valor do Bem</div>
            </div>
          </Col>
          <Col xs={12} md={7}>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SimulateAgain)