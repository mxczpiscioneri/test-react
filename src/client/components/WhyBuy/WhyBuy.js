import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Item from './Item/Item';
import economy from './economy.svg';
import bureaucracy from './bureaucracy.svg';
import freedom from './freedom.svg';
import sales from './sales.svg';
import styles from './whyBuy.css'

const WhyBuy = props => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className={styles.title}>Por que adquirir o consórcio com o <strong>Santander</strong>?</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Item 
              title='Economia'
              img={economy}>
              <p className={styles.text}>Você não paga taxa de juros!</p>
              <p className={styles.text}>Taxa de administração de apenas <span className={styles.textFeatured}>0,19% a.m ou 0,21%</span> a.m (varia de acordo com o plano escolhido).</p>
            </Item>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Item 
              title='Liberdade'
              img={freedom}>
              <p className={styles.text}>Poder de negociação de compra à vista!</p>
              <p className={styles.text}>Após a contemplação você escolhe um veículo novo ou usado com até <span className={styles.textFeatured}>10 anos para carros e 5 anos para motos.</span></p>
            </Item>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Item 
              title='Sem Burocracia'
              img={bureaucracy}>
              <p className={styles.text}>Rapidez na análise de seu <span className={styles.textFeatured}>crédito</span> e no pagamento do bem!</p>
              <p className={styles.text}>Com o Consórcio é muito mais fácil planejar a compra de seu carro.</p>
            </Item>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Item 
              title='Pós Vendas'
              img={sales}>
              <p className={styles.text}>Conte com diversos serviços disponíveis <span className={styles.textFeatured}>online</span> pra você!</p>
              <p className={styles.text}>Extrato da sua cota, resultados das assembleias, passo a passo para comprar seu bem, entre outros benefícios.</p>
            </Item>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WhyBuy)