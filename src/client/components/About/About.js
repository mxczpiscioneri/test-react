import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Banner from '../Banner/Banner'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'
import styles from './about.css'
import iconeAdesao from './icone-adesao.svg'
import iconeContemplacao from './icone-contemplacao.svg'
import iconeCredito from './icone-credito.svg'
import iconeVeiculo from './icone-chaves.svg'
import iconeFim from './icone-medalha.svg'

const listSteps = [
  {
    title: 'Adesão',
    text: 'Após o pagamento da primeira parcela, você passa a fazer parte de um grupo e recebe o número da sua cota para participar das assembleias.',
    image: iconeAdesao
  },
  {
    title: 'Contemplação',
    text: 'Nas assembleias mensais. Você poderá ser sorteado pela Loteria Federal. Se preferir, pode ofertar lances com recursos próprios, lance embutido ou uma combinação entre eles. O lance com maior percentual será o vencedor.',
    image: iconeContemplacao
  },
  {
    title: 'Análise de Crédito',
    text: 'É feita a análise do seu crédito. Se estiver tudo certo, você já pode escolher o seu bem.',
    image: iconeCredito
  },
  {
    title: 'Escolha seu veículo',
    text: 'Chegou a hora tão esperada!',
    image: iconeVeiculo
  },
  {
    title: 'Fim do Plano',
    text: 'Agora é só pagar as parcelas restantes.',
    image: iconeFim
  },
]

const steps = listSteps.map((step, index) => (
  <Row key={index}>
    <Col xs={12} sm={4} lg={3} xl={2} offset={{ lg: 1, xl: 2 }}>
      <div className={styles.boxIcon}>
        <img src={step.image} alt={step.title} />
        <span>{step.title}</span>
      </div>
    </Col>
    <Col xs={12} sm={8} lg={7} xl={6}>
      <div className={styles.boxText}>
        <p>{step.text}</p>
      </div>
    </Col>
  </Row>
))

const About = props => {
  return (
    <div>
      <Header />

      <Menu transparent />

      <Banner type='o_que_eh' />

      <section className={styles.content}>
        <Container>
          <Row>
            <Col xs={12}>
              <h3 className={styles.title}>Entenda as etapas para você contratar sua <span>carta de crédito</span></h3>
            </Col>
          </Row>

          {steps}

        </Container>
      </section>

      <Testimonial />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)