import React from 'react'
import NumberFormat from 'react-number-format'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import Cars from './Cars/Cars'
import Title from '../Title/Title'
import Info from '../Info/Info'
import IconInfo from './info.svg'
import styles from './plans.css'
import Star from './icone-estrela.svg';

export default class Plans extends React.Component {
  submitForm = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.props.letterCredit.id)
  }

  render() {
    const letterCredit = this.props.letterCredit

    return (
      <section className={styles.container}>
        <Container>
          <Hidden sm md lg xl>
            <Row>
              <Col xs={6} className={styles.normal}>
                <label>Parcela normal</label>
                <span>${letterCredit.duration} x R$ <NumberFormat value={letterCredit.regular_installment_safe_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
              </Col>
              <Col xs={6} className={styles.flex}>
                <label>Parcela flex</label>
                <span>{letterCredit.duration} x R$ <NumberFormat value={letterCredit.flex_installment_safe_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span>
              </Col>
              <Col xs={12}>
                <button onClick={this.submitForm} className={styles.btn}>TENHO INTERESSE</button>
                <hr className={styles.separator} />
              </Col>
              <Col xs={12}>
                <h3 className={styles.titleSuggestions}>Sugestões de veículos que você poderá <span>comprar</span>*</h3>
                <Cars vehicles={this.props.vehicles} />
              </Col>
            </Row>
          </Hidden>
          <Hidden xs>
            <Row>
              <Col xs={12}>
                <Title className={styles.title}>Veja o que encontramos para você :)</Title>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={5} offset={{ sm: 1 }}>
                <p className={styles.textResult}>Você terá uma carta de crédito de <span className={styles.large}>R$ <NumberFormat value={letterCredit.full_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span> pagando apenas <span className={styles.large}>R$ <NumberFormat value={letterCredit.regular_installment_safe_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span> por <span className={styles.large}>{letterCredit.duration}</span> meses.</p>
                <p className={styles.textResultSmall}>Valor da parcela sem seguro <span>R$ <NumberFormat value={letterCredit.regular_installment_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span></p>
                <p className={styles.textResult}>Caso queira pagar só <span className={styles.green}>R$ <NumberFormat value={letterCredit.flex_installment_safe_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span> nos primeiros meses, não deixe de optar pelo plano Flex!
                  <Info
                    icon={IconInfo}
                    alt='clique aqui e veja os detalhes'
                    className={styles.info}
                    title='Parcela flex'
                    body={
                      <p>Você pode reduzir o valor das suas parcelas em até 30%. Este desconto vale até a contemplação ou até a metade do seu plano (o que ocorrer primeiro). Depois disso, suas parcelas serão reajustadas somando-se o valor do desconto.</p>
                    } />
                </p>
                <p className={styles.textResultSmall}>Valor da parcela sem seguro <span>R$ <NumberFormat value={letterCredit.flex_installment_value} displayType={'text'} decimalSeparator={','} thousandSeparator={'.'} fixedDecimalScale={true} decimalScale={2} /></span></p>
                <button onClick={this.submitForm} className={styles.btn}>TENHO INTERESSE</button>
              </Col>
              <Col xs={12} sm={4}>
                <Cars vehicles={this.props.vehicles} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p className={styles.suggestions}>* Sugestão de <span>veículos</span> que você poderá comprar com a carta escolhida.</p>
              </Col>
            </Row>
          </Hidden>
        </Container>
      </section>
    )
  }
}
