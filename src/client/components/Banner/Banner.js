import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import classNames from 'classnames'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import Form from './Form/Form'
import styles from './banner.css'
import bannerDefault from './bg-home.png'

const Banner = props => {

  const actionClass = classNames(
    styles.action,
    {
      [styles.banner]: props.form
    }
  )

  const listBannersDefault = [
    {
      title: 'Já pensou em comprar seu carro sem juros?',
      subtitle: 'com o Consórcio Santander você pode!',
      image: bannerDefault
    },
  ]

  const listBanners = props.images || listBannersDefault

  const banners = listBanners.map((banner, i) => (
    <div key={i}>
      <section className={styles.hero}>
        <img
          className={styles.thumbnail}
          src={banner.image}
          alt={banner.title}
        />

        {props.mask && <span className={styles.mask} />}

        <div className={actionClass}>
          <div className={styles.actionContent}>
            <div className={styles.text}>
              <Container>
                <Row>
                  <Col xs={12} lg={8} offset={{ lg: 2 }}>
                    <p className={styles.title}>{banner.title}</p>
                    {
                      props.hiddenSubTitleXS
                        ?
                        <Hidden xs>
                          <p className={styles.subTitle}>{banner.subtitle}</p>
                        </Hidden>
                        :
                        <p className={styles.subTitle}>{banner.subtitle}</p>
                    }
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </div>
  ))

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: props.autoplay,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div id='Banner' className={styles.banner}>
      <Slider className={styles.slider} {...settings}>
        {banners}
      </Slider>

      {props.form &&
        <Container>
          <Row>
            <Col xs={12} lg={8} offset={{ lg: 2 }}>
              <Form />
            </Col>
          </Row>
        </Container>
      }
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Banner)