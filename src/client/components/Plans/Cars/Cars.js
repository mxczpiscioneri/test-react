import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import styles from './cars.css'
import imgCar from './car01.png'

const Cars = props => {

  const listCars = [
    { name: "Fiat Mobi", picture: imgCar },
    { name: "Hyundai HB20", picture: imgCar },
    { name: "Chevrolet Cruze", picture: imgCar },
  ]

  const cars = listCars.map((car, i) => (
    <section key={i} className={styles.car}>
      <img className={styles.picture} src={car.picture} alt={car.name} />
      <p className={styles.name}>{car.name}</p>
    </section>
  ))

  const settings = {
    dots: true,
    dotsClass: 'dots',
    arrows: false,
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