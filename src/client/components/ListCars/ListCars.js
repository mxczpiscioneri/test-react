import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './listCars.css'

const ListCars = props => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3>ListCars</h3>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListCars)