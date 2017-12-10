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
import bgAbout from './bg-about.png';
import iconeAdesao from './icone-adesao.svg';
import iconeContemplacao from './icone-contemplacao.svg';
import iconeCredito from './icone-credito.svg';
import iconeVeiculo from './icone-chaves.svg';
import iconeFim from './icone-medalha.svg';

const listBanners = [
  {
    subtitle: 'O Consórcio Santander é a união de um grupo de pessoas que planeja a compra do seu carro pagando bem menos.',
    image: bgAbout
  },
]

const About = props => {
  return (
    <div>
      <Header />

      <Menu transparent />

      <Banner images={listBanners} />

      <section className={styles.content}>
        <Container>
          <Row>
            <Col xs={12}>
              <h3 className={styles.title}>Entenda as etapas para você contratar sua carta de crédito</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} lg={3} xl={2} offset={{ lg: 1, xl: 2 }}>
              <div className={styles.boxIcon}>
                <img src={iconeAdesao} alt='Adesão' />
                <span>Adesão</span>
              </div>
            </Col>
            <Col xs={12} sm={8} lg={7} xl={6}>
              <div className={styles.boxText}>
                <p>Após o pagamento da primeira parcela, você passa a fazer parte de um grupo e recebe o número da sua cota para participar das assembleias.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} lg={3} xl={2} offset={{ lg: 1, xl: 2 }}>
              <div className={styles.boxIcon}>
                <img src={iconeContemplacao} alt='Contemplação' />
                <span>Contemplação</span>
              </div>
            </Col>
            <Col xs={12} sm={8} lg={7} xl={6}>
              <div className={styles.boxText}>
                <p>Nas assembleias mensais. Você poderá ser sorteado pela Loteria Federal. Se preferir, pode ofertar lances com recursos próprios, lance embutido ou uma combinação entre eles. O lance com maior percentual será o vencedor.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} lg={3} xl={2} offset={{ lg: 1, xl: 2 }}>
              <div className={styles.boxIcon}>
                <img src={iconeCredito} alt='Análise de Crédito' />
                <span>Análise de Crédito</span>
              </div>
            </Col>
            <Col xs={12} sm={8} lg={7} xl={6}>
              <div className={styles.boxText}>
                <p>É feita a análise do seu crédito. Se estiver tudo certo, você já pode escolher o seu bem. </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} lg={3} xl={2} offset={{ lg: 1, xl: 2 }}>
              <div className={styles.boxIcon}>
                <img src={iconeVeiculo} alt='Escolha seu veículo' />
                <span>Escolha seu veículo</span>
              </div>
            </Col>
            <Col xs={12} sm={8} lg={7} xl={6}>
              <div className={styles.boxText}>
                <p>Chegou a hora tão esperada!</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} lg={3} xl={2} offset={{ lg: 1, xl: 2 }}>
              <div className={styles.boxIcon}>
                <img src={iconeFim} alt='Fim do Plano' />
                <span>Fim do Plano</span>
              </div>
            </Col>
            <Col xs={12} sm={8} lg={7} xl={6}>
              <div className={styles.boxText}>
                <p>Agora é só pagar as parcelas restantes.</p>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)