import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import { Container, Row, Col } from '../Grid/Grid'
import icon from './icone-quote.svg'
import styles from './testimonial.css'

const Testimonial = props => {

  const listTestimonial = [
    { name: "Miguel Alves Barros", picture: "http://lorempixel.com/90/90/people/1", message: "Eu fui muito bem atendido e a proposta oferecida foi muito boa. Eu recomendo e faria novamente." },
    { name: "Douglas Cavalcanti Souza", picture: "http://lorempixel.com/90/90/people/7", message: "Eu fui muito bem atendido e a proposta oferecida foi muito boa. Eu recomendo e faria novamente." },
    { name: "Raissa Fernandes Pereira", picture: "http://lorempixel.com/90/90/people/9", message: "Eu fui muito bem atendido e a proposta oferecida foi muito boa. Eu recomendo e faria novamente." },
  ]

  const testimonials = listTestimonial.map((testimonial, i) => (
    <section key={i} className={styles.testimonial}>
      <img className={styles.picture} src={testimonial.picture} alt={testimonial.name} />
      <p className={styles.message}>"{testimonial.message}"</p>
      <p className={styles.name}>{testimonial.name}</p>
      <img className={styles.icon} src={icon} alt={testimonial.title} />
    </section>
  ))

  const settings = {
    dots: true,
    dotsClass: 'dots',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h3 className={styles.title}>Depoimentos de quem já tem uma <span>carta do Santander</span></h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={10} md={8} lg={6} offset={{ sm: 1, md: 2, lg: 3 }}>
          <Slider className={styles.slider} {...settings}>
            {testimonials}
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Testimonial)