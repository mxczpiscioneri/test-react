import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './lettersCredit.css'
import Item from './Item/Item';

const LettersCredit = props => {
  const letters = [
    { value: 30.000, installment: 900, installmentFlex: 500, deadline: 72 },
    { value: 45.000, installment: 900, installmentFlex: 500, deadline: 72, selected: true },
    { value: 60.000, installment: 900, installmentFlex: 500, deadline: 72 },
    { value: 90.000, installment: 900, installmentFlex: 500, deadline: 72 }
  ]

  return (
    <section className={styles.container}>
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className={styles.title}>Veja algumas das nossas cartas de crédito</h3>
          </Col>
        </Row>
        <Row>
          {
            letters.map((item, index) =>
              <Col xs={12} sm={6} md={3} key={index}>
                <Item
                  value={item.value}
                  installment={item.installment}
                  installmentFlex={item.installmentFlex}
                  deadline={item.deadline}
                  selected={item.selected} />
              </Col>)
          }
        </Row>
        <Row>
          <Col xs={12} className={styles.buttonContainer}>
            <button className={styles.button}>
              Ver mais cartas
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LettersCredit)