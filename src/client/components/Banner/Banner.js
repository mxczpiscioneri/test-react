import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import classNames from 'classnames'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import Form from './Form/Form'
import styles from './banner.css'
import { getBanners } from '../../actions/bannerActions'

class Banner extends Component {
  componentWillMount() {
    this.props.getBanners(this.props.type)
  }

  render() {
    const heroClass = classNames(
      styles.hero,
      {
        [styles.smaller]: !this.props.form
      }
    )

    const actionClass = classNames(
      styles.action,
      {
        [styles.banner]: this.props.form
      }
    )

    const banners = this.props.banners.map((banner, i) => (
      <div key={i}>
        <section className={heroClass}>
          <img
            className={styles.thumbnail}
            src={banner.image}
            alt={banner.title}
          />

          {this.props.mask && <span className={styles.mask} />}

          <div className={actionClass}>
            <div className={styles.actionContent}>
              <div className={styles.text}>
                <Container>
                  <Row>
                    <Col xs={12} lg={8} offset={{ lg: 2 }}>
                      <p className={styles.title}>{banner.page === "home" ? "Já pensou em comprar seu carro sem pagar juros?" : banner.title}</p>
                      {banner.page === "home" &&
                        <Hidden xs sm>
                          <p className={styles.subTitle}>{banner.title}</p>
                        </Hidden>
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
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div id='Banner' className={styles.banner}>
        {
          (this.props.banners && this.props.banners.length > 0) &&
          <Slider className={styles.slider} {...settings}>
            {banners}
          </Slider>
        }

        {
          this.props.form &&
          <Container>
            <Row>
              <Col xs={12} lg={8} offset={{ lg: 2 }}>
                <Form />
                <Hidden xs sm>
                  <div className={styles.legend}>* No consórcio você paga apenas taxa de administração, que varia conforme o plano contratado.</div>
                </Hidden>
              </Col>
            </Row>
          </Container>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    banners: state.bannerReducer.banners.content
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBanners }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Banner)