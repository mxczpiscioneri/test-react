import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './banner.css'

const Banner = props => {

  const listBanners = [
    { title: '1 Saiba mais sobre o Consórcio Santander', subtitle: 'O Consórcio Santander é a união de um grupo de pessoas que planeja a compra do seu carro ou moto (novo ou usado) pagando menos pois não há taxa de juros. ', image: 'http://lorempixel.com/1920/600/transport/10/' },
    { title: '2 Saiba mais sobre o Consórcio Santander', subtitle: 'O Consórcio Santander é a união de um grupo de pessoas que planeja a compra do seu carro ou moto (novo ou usado) pagando menos pois não há taxa de juros. ', image: 'http://lorempixel.com/1920/600/transport/4/' },
    { title: '3 Saiba mais sobre o Consórcio Santander', subtitle: 'O Consórcio Santander é a união de um grupo de pessoas que planeja a compra do seu carro ou moto (novo ou usado) pagando menos pois não há taxa de juros. ', image: 'http://lorempixel.com/1920/600/transport/5/' },
    { title: '4 Saiba mais sobre o Consórcio Santander', subtitle: 'O Consórcio Santander é a união de um grupo de pessoas que planeja a compra do seu carro ou moto (novo ou usado) pagando menos pois não há taxa de juros. ', image: 'http://lorempixel.com/1920/600/transport/8/' },
  ]

  const banners = listBanners.map((banner, i) => (
    <div key={i}>
      <section className={styles.hero}>
        <img
          className={styles.thumbnail}
          src={banner.image}
          alt={banner.title}
        />

        <div className={styles.action}>
          <div className={styles.actionContent}>
            <div className={styles.text}>
              <Container gutter={true}>
                <p className={styles.title}>{banner.title}</p>
                <p className={styles.subTitle}>{banner.subtitle}</p>
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider className={styles.slider} {...settings}>
      {banners}
    </Slider>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Banner)