import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './info.css'
import logoBank from './logo-santander-rodape-medium.svg';

const Footer = props => {
  return (
    <section className={styles.container}>
      <Container gutter={true}>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <img
              src={logoBank}
              alt='Santander'
              className={styles.logo} />
            <div>
              <p className={styles.title}>SANTANDER CONSÓRCIOS E INVESTIMENTOS S.A.</p>
              <p className={styles.text}>Com o Consórcio, comprar ou trocar seu carro é muito mais fácil!</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div>
              <p className={styles.title}>CENTRAL DE ATENDIMENTO AO CONSORCIADO</p>
              <p className={styles.text}>
                4004 3535 - (Capitais e Regiões Metropolitanas)
              0800 702 3535 - (Demais Localidades)
              De segunda a sexta-feira, das 9h às 18h, exceto feriados.
              Site Santander: www.santander.com.br
              E-mail: consorcio@santander.com.br
            </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div>
              <p className={styles.title}>SAC – Serviço de Atendimento ao Consumidor</p>
              <p className={styles.text}>
                Reclamações, Cancelamentos, Sugestões e informações Gerais. 0800 762 7777
Atende também deficientes auditivos e de fala.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)