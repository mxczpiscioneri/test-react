import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import { Container, Row, Col } from '../Grid/Grid'
import ArrowLeft from '../ArrowLeft/ArrowLeft'
import ArrowRight from '../ArrowRight/ArrowRight'
import icon from './icone-quote.svg'
import styles from './testimonial.css'
import { getTestimonials } from '../../actions/testimonialActions'

class Testimonial extends Component {
  componentWillMount() {
    this.props.getTestimonials(this.props.type)
  }

  render() {
    const listTestimonials = this.props.testimonials.map((testimonial, i) => (
      <section key={i} className={styles.testimonial}>
        {testimonial.picture ?
          <img src={testimonial.picture} className={styles.picture} alt={testimonial.name} />
          :
          <img src={icon} className={styles.emptyPicture} alt={testimonial.name} />
        }

        <p className={styles.message}>"{testimonial.message}"</p>
        <p className={styles.name}>{testimonial.name}</p>
        {testimonial.picture &&
          <img className={styles.icon} src={icon} alt={testimonial.name} />
        }
      </section>
    ))

    const settings = {
      dots: true,
      dotsClass: 'dots',
      arrows: true,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <Container>
        {
          (this.props.testimonials && this.props.testimonials.length > 0) &&
          <div>
            <Row>
              <Col xs={12}>
                <h3 className={styles.title}>Depoimentos de quem já tem uma <span>carta do Santander</span></h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={10} md={8} lg={6} offset={{ sm: 1, md: 2, lg: 3 }}>
                <Slider className={styles.slider} {...settings}>
                  {listTestimonials}
                </Slider>
              </Col>
            </Row>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    testimonials: state.testimonialReducer.testimonials.content
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getTestimonials }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Testimonial)