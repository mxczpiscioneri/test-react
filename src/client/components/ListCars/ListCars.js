import React from 'react'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import styles from './listCars.css'
import ListDesktop from './ListDesktop'
import ListMobile from './ListMobile'
import Title from '../Title/Title'

const ListCars = props => {
  const cars = props.vehicles

  return (
    <section className={styles.container}>
      {
        (cars && cars.length > 0) &&
        <Container>
          <Row>
            <Col xs={12} md={6} offset={{ md: 3 }}>
              <Title className={styles.title}>Confira algumas sugestões de carros que você pode comprar com a carta escolhida</Title>
            </Col>
          </Row>

          <Hidden xs>
            <ListDesktop list={cars} />
          </Hidden>

          <Hidden sm md lg xl>
            <ListMobile list={cars} />
          </Hidden>

          <Hidden xs>
            <Row>
              <Col xs={12}>
                <p className={styles.text}>Veículos para sugestão de compra baseados na carta de crédito escolhida.</p>
              </Col>
            </Row>
          </Hidden>
        </Container>
      }

    </section>
  )
}

export default ListCars