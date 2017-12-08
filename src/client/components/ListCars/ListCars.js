import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './listCars.css'
import Item from './Item/Item';

const ListCars = props => {
  const cars = [
    { name: 'Fiat Bravo', value: 35.000, image: 'http://lorempixel.com/230/173/transport/4/' },
    { name: 'Chevrolet Cruze', value: 60.000, image: 'http://lorempixel.com/230/173/transport/5/', selected: true },
    { name: 'Fiat Mobi', value: 50.000, image: 'http://lorempixel.com/230/173/transport/8/' },
    { name: 'Hyundai HB20', value: 40.000, image: 'http://lorempixel.com/230/173/transport/9/' }
  ]

  return (
    <section className={styles.container}>
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className={styles.title}>Confira algumas sugestões de carros que você pode comprar</h3>
          </Col>
        </Row>
        <Row>
          {
            cars.map((item, index) =>
              <Col xs={12} sm={6} md={3} key={index}>
                <Item
                  name={item.name}
                  value={item.value}
                  image={item.image}
                  selected={item.selected} />
              </Col>
            )
          }
        </Row>
        <Row>
          <Col xs={12}>
            <p className={styles.text}>*Veículos para sugestão de compra baseados na carta de crédito escolhida. O Consósrcio Santander.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListCars)