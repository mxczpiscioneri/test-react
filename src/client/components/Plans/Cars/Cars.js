import React from 'react'
import Slider from 'react-slick'
import { Hidden } from '../../Grid/Grid'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import styles from './cars.css'

const Cars = props => {

  const cars = props.vehicles.map((car, i) => (
    <section key={i} className={styles.car}>
      <img className={styles.picture} src={car.Fotos[0].caminho} alt={car.Modelo.nome} />
      <p className={styles.name}>{car.Modelo.nome}</p>
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

  const settingsMobile = {
    dots: true,
    dotsClass: 'dots',
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div>
      <Hidden xs>
        <Slider className={styles.slider} {...settings}>
          {cars}
        </Slider>
      </Hidden>
      <Hidden sm md lg xl>
        <Slider className={styles.slider} {...settingsMobile}>
          {cars}
        </Slider>
      </Hidden>
    </div>
  )
}

export default Cars