import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Banner from '../Banner/Banner'
import WhyBuy from '../WhyBuy/WhyBuy'
import Video from '../Video/Video'
import Testimonial from '../Testimonial/Testimonial'
import LettersCredit from '../LettersCredit/LettersCredit'
import ListCars from '../ListCars/ListCars'
import Footer from '../Footer/Footer'
import styles from './home.css'

const listBanners = [
  { title: 'Já pensou em comprar seu carro sem juros?', subtitle: 'com o Consórcio Santander você pode!', image: 'https://loremflickr.com/1920/600/car/?random=1' },
  { title: 'Já pensou em comprar seu carro sem juros?', subtitle: 'com o Consórcio Santander você pode!', image: 'https://loremflickr.com/1920/600/car/?random=2' },
  { title: 'Já pensou em comprar seu carro sem juros?', subtitle: 'com o Consórcio Santander você pode!', image: 'https://loremflickr.com/1920/600/car/?random=3' },
]

class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <Menu transparent />

        <Banner images={listBanners} form autoplay />

        <WhyBuy />

        <Video />

        <Testimonial />

        <LettersCredit showTitle={true} count={4} />

        <ListCars />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
