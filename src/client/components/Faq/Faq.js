import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Accordion, AccordionItem } from 'react-sanfona';
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'
import styles from './faq.css'

const Faq = props => {
  return (
    <div>
      <Header />

      <Menu />

      <section className={styles.content}>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>Dúvidas Frequentes Consórcio Santander</h1>
              <p className={styles.subTitle}>Encontre respostas rápidas e informações.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} offset={{ sm: 1 }}>
              <Accordion>
                <AccordionItem title={'O que é o Consórcio Santander?'} expanded>
                  <div>
                    <p>Consórcio é a união de pessoas físicas e/ou jurídicas que se reúnem com a finalidade de adquirir um bem por meio de autofinanciamento. Os participantes adquirem uma cota e pagam prestações mensais, gerando recursos para a contemplação dos consorciados, que ocorrem por meio de sorteios e, se houver saldo de caixa, por lances.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'Qual o papel da Administradora de consórcios?'}>
                  <div>
                    <p>Consórcio é a união de pessoas físicas e/ou jurídicas que se reúnem com a finalidade de adquirir um bem por meio de autofinanciamento. Os participantes adquirem uma cota e pagam prestações mensais, gerando recursos para a contemplação dos consorciados, que ocorrem por meio de sorteios e, se houver saldo de caixa, por lances.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'O que é grupo e cota?'}>
                  <div>
                    <p>Consórcio é a união de pessoas físicas e/ou jurídicas que se reúnem com a finalidade de adquirir um bem por meio de autofinanciamento. Os participantes adquirem uma cota e pagam prestações mensais, gerando recursos para a contemplação dos consorciados, que ocorrem por meio de sorteios e, se houver saldo de caixa, por lances.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'Quem é responsável pela regulamentação/fiscalização dos Consórcios?'}>
                  <div>
                    <p>Consórcio é a união de pessoas físicas e/ou jurídicas que se reúnem com a finalidade de adquirir um bem por meio de autofinanciamento. Os participantes adquirem uma cota e pagam prestações mensais, gerando recursos para a contemplação dos consorciados, que ocorrem por meio de sorteios e, se houver saldo de caixa, por lances.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'Como é composta a prestação de consórcio?'}>
                  <div>
                    <p>Consórcio é a união de pessoas físicas e/ou jurídicas que se reúnem com a finalidade de adquirir um bem por meio de autofinanciamento. Os participantes adquirem uma cota e pagam prestações mensais, gerando recursos para a contemplação dos consorciados, que ocorrem por meio de sorteios e, se houver saldo de caixa, por lances.</p>
                  </div>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <Testimonial type={'o_que_eh'} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Faq)