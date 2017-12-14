import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Item from './Item/Item';
import economy from './icone-economia.svg';
import bureaucracy from './icone-burocracia.svg';
import freedom from './icone-liberdade.svg';
import sales from './icone-vendas.svg';
import styles from './whyBuy.css'

const WhyBuy = props => {
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col xs={12} sm={8} offset={{ sm: 2 }}>
            <h3 className={styles.title}>O Consórcio Santander é a união de um grupo de pessoas que planeja a compra do veículo pagando bem menos.</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Item
              title='Economia'
              img={economy}>
              <p className={styles.text}>Você paga taxa de administração a partir de 0,19%  ou 0,21% a.m,</p>
              <p className={styles.text}>(dependendo do valor escolhido) que são menores do que os juros cobrados em outras modalidades de crédito.</p>
            </Item>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Item
              title='Liberdade'
              img={freedom}>
              <p className={styles.text}><span>Após a contemplação</span> você escolhe o veículo novo ou usado com até 10 anos.</p>
              <p className={styles.text}>Além disso você tem maior poder de negociação com o vendedor pois comprará o veículo a vista.</p>
            </Item>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Item
              title='Sem Burocracia'
              img={bureaucracy}>
              <p className={styles.text}><span>Rapidez</span> na análise de seu crédito  e na disponibilização da sua carta.</p>
            </Item>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Item
              title='Pós Vendas'
              img={sales}>
              <p className={styles.text}>Consulte o extrato da sua cota, resultado das assembleias e oferte lances de forma online.</p>
              <p className={styles.text}>Além disso, conte com o suporte da central de <span>atendimento e chat.</span></p>
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