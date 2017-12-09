import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import styles from './cars.css'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'

const Cars = props => {

  const listCars = [
    { name: "Fiat Mobi", picture: "http://lorempixel.com/270/175/transport/4" },
    { name: "Hyundai HB20", picture: "http://lorempixel.com/270/175/transport/5" },
    { name: "Chevrolet Cruze", picture: "http://lorempixel.com/270/175/transport/8" },
  ]

  const cars = listCars.map((car, i) => (
    <section key={i} className={styles.car}>
      <img className={styles.picture} src={car.picture} alt={car.name} />
      <p className={styles.name}>{car.name}</p>
    </section>
  ))

  const settings = {
    dots: false,
    arrows: true,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider className={styles.slider} {...settings}>
      {cars}
    </Slider>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cars)