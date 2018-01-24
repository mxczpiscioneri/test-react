import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import { Accordion, AccordionItem } from 'react-sanfona';
import styles from './info.css'
import ImgApp from './icon-app.svg'
import ImgChat from './icon-chat.svg'
import ImgSite from './icon-site.svg'
import { Hidden } from 'react-grid-system';

const Central = props => {
  return (
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
  )
}

const SAC = props => {
  return (
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
  )
}

const Ouvidoria = props => {
  return (
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
  )
}

const Footer = props => {
  return (
    <section className={styles.container}>
      <Container>

        <Hidden xs>
          <h3 className={styles.title}>Estamos conectados 24 horas por dia, 7 dias por semana</h3>
        </Hidden>

        <Hidden sm md lg xl>
          <Col xs={12} md={10} offset={{ md: 1 }}>
            <Accordion>
              <AccordionItem title={
                <div className={styles.linkContainer}>
                  <div className={styles.linkImg}>
                    <img
                      src={ImgApp}
                      alt='app' />
                  </div>
                  <div className={styles.linkName}>
                    APLICATIVO SANTANDER
                  </div>
                </div>
              } expanded>
                <Central />
              </AccordionItem>
              <AccordionItem title={
                <div className={styles.linkContainer}>
                  <div className={styles.linkImg}>
                    <img
                      src={ImgSite}
                      alt='site' />
                  </div>
                  <div className={styles.linkName}>
                    SANTANDER.COM.BR
                    </div>
                </div>
              }>
                <SAC />
              </AccordionItem>
              <AccordionItem title={
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
              }>
                <Ouvidoria />
              </AccordionItem>
            </Accordion>
          </Col>
        </Hidden>

        <Hidden xs>
          <Row>
            <Col sm={4}>
              <Accordion>
                <AccordionItem title={
                  <div className={styles.linkContainer}>
                    <div className={styles.linkImg}>
                      <img
                        src={ImgApp}
                        alt='app' />
                    </div>
                    <div className={styles.linkName}>
                      APLICATIVO SANTANDER
                  </div>
                  </div>
                } expanded>
                  <Central />
                </AccordionItem>
              </Accordion>
            </Col>
            <Col sm={4}>
              <Accordion>
                <AccordionItem title={
                  <div className={styles.linkContainer}>
                    <div className={styles.linkImg}>
                      <img
                        src={ImgSite}
                        alt='site' />
                    </div>
                    <div className={styles.linkName}>
                      SANTANDER.COM.BR
                    </div>
                  </div>
                } expanded>
                  <SAC />
                </AccordionItem>
              </Accordion>
            </Col>
            <Col sm={4} md={4}>
              <Accordion>
                <AccordionItem title={
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
                } expanded>
                  <Ouvidoria />
                </AccordionItem>
              </Accordion>
            </Col>

            {/* < Col xs={12} md={10} offset={{ md: 1 }}>
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
                      SANTANDER <br />.COM.BR
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

              <Row>
                <Col xs={12} md={4}>
                  <Central />
                </Col>
                <Col xs={12} md={4}>
                  <SAC />
                </Col>
                <Col xs={12} md={4}>
                  <Ouvidoria />
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <p className={styles.textDisclaimer}>Planos de Consórcio administrados por <span>Santander Brasil Administradora de Consórcio Ltda</span>, CNPJ nº 55.942.312/0001-06. Sujeito à análise de crédito no momento da contemplação e demais condições do produto. Leia o contrato e o regulamento antes da adesão</p>
                </Col>
              </Row>

            </Col> */}
          </Row >
        </Hidden >

      </Container >
    </section >
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)