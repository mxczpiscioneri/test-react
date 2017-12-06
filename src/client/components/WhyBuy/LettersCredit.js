import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './lettersCredit.css'
import Item from './Item/Item';

const LettersCredit = props => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className={styles.title}>Veja algumas das nossas cartas de crédito</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <Item value={30.000} installment={900} installmentFlex={500} deadline={72} selected={true} />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <Item value={45.000} installment={900} installmentFlex={500} deadline={72} selected={false} />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <Item value={60.000} installment={900} installmentFlex={500} deadline={72} selected={false} />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <Item value={90.000} installment={900} installmentFlex={500} deadline={72} selected={false} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LettersCredit)