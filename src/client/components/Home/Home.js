import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import { getLettersCredit } from '../../actions/lettersCreditActions'
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

class Home extends Component {
  componentWillMount () {
    this.props.getLettersCredit()
  }

  render() {
    return (
      <div>
        <Header />

        <Menu transparent />

        <Banner form mask hiddenSubTitleXS type='home' />

        <WhyBuy />

        <Video />

        <Testimonial />

        <LettersCredit title={
          <h3 className={styles.lettersTitle}>Veja algumas das nossas cartas de crédito</h3>
        } 
        list={this.props.lettersCredit}/>

        <ListCars />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  lettersCredit: store.lettersCreditReducer.lettersCredit.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLettersCredit
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
