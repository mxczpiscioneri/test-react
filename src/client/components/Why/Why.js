import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import Menu from '../Menu/Menu'
import Banner from '../Banner/Banner'
import Title from '../Title/Title'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'
import styles from './why.css'
import imgCars from './img-carros.png'
import imgMacbook from './img-macbook.png'
import iconChecked from './icon-check-red.svg'

const Why = props => {
  return (
    <div>
      <Menu transparent />

      <Banner type={'porque_vale_a_pena'} />

      <section className={styles.contentConsortium}>
        <Container>
          <Row>
            <Col xs={12}>
              <Title className={styles.title}>Vantagens do Cónsórcio</Title>
            </Col>
          </Row>
          <Row>
            <Col xs={10} sm={6} md={5} offset={{ xs: 1, md: 1 }}>
              <ul className={styles.list}>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Você não paga <span>juros, apenas uma taxa de administração</span></p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Parcela em até <span>72x</span>, sem precisar dar entrada</p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Poder de <span>compra</span> à vista</p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Pode ser contemplado por <span>sorteio</span> ou <span>lances</span> mensais</p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Na <span>contemplação</span> você escolhe o carro que quiser, dentro da sua carta de crédito</p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Oportunidade de formar e ampliar seu <span>patrimônio</span></p></li>
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
              <Title className={styles.title}>Vantagens do Banco Santander</Title>
            </Col>
          </Row>
          <Row>
            <Hidden xs>
              <Col xs={12} sm={5} md={4} offset={{ sm: 1, md: 2 }}>
                <div className={styles.imgBox}>
                  <img src={imgMacbook} alt={'Vantagens do Banco Santander'} />
                </div>
              </Col>
            </Hidden>
            <Col xs={10} sm={5} md={4} offset={{ xs: 1 }}>
              <ul className={styles.list}>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Taxa de Administração mais baixa: 0,19% e 0,21% a.m., dependendo do valor da carta de crédito.</p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Utilize até 30% da carta de crédito para dar o lance embutido</p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Reduza até 30% do valor da sua parcela com o Plano Flex</p></li>
                <li className={styles.listItem}><img src={iconChecked} /> <p>Escolha um veículo novo ou usado com até 10 anos de uso.</p></li>
              </ul>
            </Col>
            <Hidden sm md lg xl>
              <Col xs={12}>
                <div className={styles.imgBox}>
                  <img src={imgMacbook} alt={'Vantagens do Banco Santander'} />
                </div>
              </Col>
            </Hidden>
          </Row>
        </Container>
      </section>

      <Testimonial type={'porque_vale_a_pena'} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Why)