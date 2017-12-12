import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Banner from '../Banner/Banner'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'
import styles from './why.css'
import bgWhy from './bg-why.png'
import imgCars from './img-carros.svg'
import imgMacbook from './img-macbook.svg'
import iconChecked from './icon-check-red.svg'

const listBanners = [
  {
    subtitle: 'Descubra os principais benefícios e diferenciais do Consórcio Santander',
    image: bgWhy
  },
]

const Why = props => {
  return (
    <div>
      <Header />

      <Menu transparent />

      <Banner images={listBanners} />

      <section className={styles.contentConsortium}>
        <Container>
          <Row>
            <Col xs={12}>
              <h3 className={styles.title}>Vantagens do Cónsórcio</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={5} offset={{ md: 1 }}>
              <ul className={styles.list}>
                <li className={styles.listItem}><img src={iconChecked} /> Você não paga juros apenas uma taxa de administração</li>
                <li className={styles.listItem}><img src={iconChecked} /> Parcela em até 72x, sem precisar dar entrada</li>
                <li className={styles.listItem}><img src={iconChecked} /> Poder comprar à vista</li>
                <li className={styles.listItem}><img src={iconChecked} /> Pode ser contemplado por sorteio ou lances mensais</li>
                <li className={styles.listItem}><img src={iconChecked} /> Na contemplação você escolhe o carro que quiser, dentro da sua carta de crédito</li>
                <li className={styles.listItem}><img src={iconChecked} /> Oportunidade de formar e ampliar seu patrimônio</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={5}>
              <div className={styles.imgBox}>
                <img src={imgCars} alt={'Vantagens do Cónsórcio'} />
              </div>
            </Col>
          </Row>

        </Container>
      </section>

      <section className={styles.contentBank}>
        <Container>
          <Row>
            <Col xs={12}>
              <h3 className={styles.title}>Vantagens do Banco Santander</h3>
            </Col>
          </Row>
          <Row>

            <Col xs={12} sm={5} md={4} offset={{ sm: 1, md: 2 }}>
              <div className={styles.imgBox}>
                <img src={imgMacbook} alt={'Vantagens do Banco Santander'} />
              </div>
            </Col>
            <Col xs={12} sm={5} md={4}>
              <ul className={styles.list}>
                <li className={styles.listItem}><img src={iconChecked} /> Taxa de Administração mais baixa: 0,19% e 0,21% a.m., dependendo do valor da carta de crédito.</li>
                <li className={styles.listItem}><img src={iconChecked} /> Utilize até 30% da carta de crédito para dar o lance embutido</li>
                <li className={styles.listItem}><img src={iconChecked} /> Reduza até 30% do valor da sua parcela com o Plano Flex</li>
                <li className={styles.listItem}><img src={iconChecked} /> Escolha um veículo novo ou usado com até 10 anos de uso.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Testimonial />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Why)