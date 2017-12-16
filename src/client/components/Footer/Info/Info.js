import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './info.css'
import ImgApp from './icon-app.svg'
import ImgChat from './icon-chat.svg'
import ImgSite from './icon-site.svg'

const Footer = props => {
  return (
    <section className={styles.container}>
      <Container>
        <h3 className={styles.title}>Estamos conectados 24 horas por dia, 7 dias por semana</h3>
        <Row>
          <Col xs={12} md={10} offset={{ md: 1 }}>
            <Row>
              <Col xs={12} md={4}>
                <div className={styles.linkContainer}>
                  <div className={styles.linkImg}>
                    <img
                      src={ImgApp}
                      alt='app' />
                  </div>
                  <div className={styles.linkName}>
                    APLICATIVO <br />SANTANDER
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.linkContainer}>
                  <div className={styles.linkImg}>
                    <img
                      src={ImgSite}
                      alt='site' />
                  </div>
                  <div className={styles.linkName}>
                    SANTANDER <br/>.COM.BR
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.linkContainer}>
                  <div className={styles.linkImg}>
                    <img
                      src={ImgChat}
                      alt='chat' />
                  </div>
                  <div className={styles.linkName}>
                    CHAT NO SITE
                  </div>
                </div>
              </Col>
            </Row>

            <div className={styles.separator}></div>

            <Row>
              <Col xs={12} md={4}>
                <div className={styles.section}>
                  <div className={styles.sectionContainer}>
                    <h4 className={styles.sectionTitle}>Central de Atendimento</h4>
                    <p className={styles.text}>
                      Pessoas físicas:<br />
                      <span className={styles.textStrong}>4004 3535</span><br />
                      (capitais e regiões metropolitanas)<br />
                      <span className={styles.textStrong}>0800 702 3535</span><br />
                      (outras localidades)
                    </p>
                    <p className={styles.text}>
                      Empresas:<br />
                      <span className={styles.textStrong}>4004 2125</span><br />
                      (capitais e regiões metropolitanas)<br />
                      <span className={styles.textStrong}>0800 726 2125</span><br />
                      (outras localidades)<br />
                      Atendimento digital 24h,<br />
                      7 dias por semana.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.section}>
                  <div className={styles.sectionContainer}>
                    <h4 className={styles.sectionTitle}>SAC</h4>
                    <p className={styles.text}>
                      Reclamações, cancelamentos<br />
                      e informações:<br />
                      <span className={styles.textStrong}>0800 762 7777</span>
                    </p>
                    <p className={styles.text}>
                      Pessoas com deficiência<br />
                      auditiva ou de fala:<br />
                      <span className={styles.textStrong}>0800 771 0401</span>
                    </p>
                    <p className={styles.text}>
                      No exterior, ligue a cobrar para:<br />
                      <span className={styles.textStrong}>55 (11) 3012 3336</span><br />
                      Atendimento 24h por dia,<br />
                      todos os dias.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className={styles.section}>
                  <div className={styles.sectionContainer}>
                    <h4 className={styles.sectionTitle}>Ouvidoria</h4>
                    <p className={styles.text}>
                      Se não ficar satisfeito<br />
                      com a solução apresentada:<br />
                      <span className={styles.textStrong}>0800 762 0322</span>
                    </p>
                    <p className={styles.text}>
                      Pessoas com deficiência<br />
                      auditiva ou de fala:<br />
                      <span className={styles.textStrong}>0800 771 0301</span>
                    </p>
                    <p className={styles.text}>
                      Disponível das 9h às 18h, de segunda a sexta-feira, exceto feriados.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </section>
    // <section className={styles.container}>
    //   <Container gutter={true}>
    //     <Row>
    //       <Col xs={12} sm={12} md={4} lg={4} xl={4}>
    //         <img
    //           src={logoBank}
    //           alt='Santander'
    //           className={styles.logo} />
    //         <div>
    //           <p className={styles.title}>SANTANDER CONSÓRCIOS E INVESTIMENTOS S.A.</p>
    //           <p className={styles.text}>Com o Consórcio, comprar ou trocar seu carro é muito mais fácil!</p>
    //         </div>
    //       </Col>
    //       <Col xs={12} sm={12} md={4} lg={4} xl={4}>
    //         <div>
    //           <p className={styles.title}>CENTRAL DE ATENDIMENTO AO CONSORCIADO</p>
    //           <p className={styles.text}>4004 3535 - (Capitais e Regiões Metropolitanas)</p>
    //           <p className={styles.text}>0800 702 3535 - (Demais Localidades)</p>
    //           <p className={styles.text}>De segunda a sexta-feira, das 9h às 18h, exceto feriados.</p>
    //           <p className={styles.text}>Site Santander: www.santander.com.br</p>
    //           <p className={styles.text}>E-mail: consorcio@santander.com.br</p>
    //         </div>
    //       </Col>
    //       <Col xs={12} sm={12} md={4} lg={4} xl={4}>
    //         <div>
    //           <p className={styles.title}>SAC – Serviço de Atendimento ao Consumidor</p>
    //           <p className={styles.text}>Reclamações, Cancelamentos, Sugestões e informações Gerais. 0800 762 7777</p>
    //           <p className={styles.text}>Atende também deficientes auditivos e de fala.</p>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)