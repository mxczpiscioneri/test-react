import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import routePaths from '../../../constants/routes'
import { Container, Row, Col } from '../../Grid/Grid'
import styles from './navigation.css'
import logoImg from './logo-wm-white.svg'
import logoFacebook from './facebook.svg'
import logoGPlus from './gplus.svg'
import logoInstagram from './instagram.svg'
import logoLinkedin from './linkedin.svg'
import logoTwitter from './twitter.svg'
import logoYouTube from './youtube.svg'

const Navigation = props => {
  return (
    <section className={styles.container}>
      <Container gutter={true}>
        <Row>
          <Col xs={12} lg={2}>
            <div className={styles.logo}>
              <Link to={routePaths.root.path}>
                <img
                  src={logoImg}
                  alt='Web motors'
                />
              </Link>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <nav className={styles.navigation}>
              <Link to={routePaths.about.path}>{routePaths.about.title}</Link>
              <Link to={routePaths.why.path}>{routePaths.why.title}</Link>
              <Link to={routePaths.faq.path}>{routePaths.faq.title}</Link>
            </nav>
          </Col>
          <Col xs={12} lg={4}>
            <div className={styles.socialNetworks}>
              <div className={styles.socialNetwork}>
                <Link to={`https://www.facebook.com/`}>
                  <img src={logoFacebook} alt={'facebook'} />
                </Link>
              </div>
              <div className={styles.socialNetwork}>
                <Link to={`https://twitter.com/`}>
                  <img src={logoTwitter} alt={'twitter'} />
                </Link>
              </div>
              <div className={styles.socialNetwork}>
                <Link to={`https://www.youtube.com/`}>
                  <img src={logoYouTube} alt={'youtube'} />
                </Link>
              </div>
              <div className={styles.socialNetwork}>
                <Link to={`https://www.linkedin.com/`}>
                  <img src={logoLinkedin} alt={'linkedin'} />
                </Link>
              </div>
              <div className={styles.socialNetwork}>
                <Link to={`https://plus.google.com`}>
                  <img src={logoGPlus} alt={'google plus'} />
                </Link>
              </div>
              <div className={styles.socialNetwork}>
                <Link to={`https://www.instagram.com/`}>
                  <img src={logoInstagram} alt={'instagram'} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)