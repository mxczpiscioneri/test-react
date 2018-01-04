import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import { getLettersCredit } from '../../actions/homeActions'
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
  componentWillMount() {
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
          list={this.props.lettersCredit}
          onClick={(id) => this.props.router.push(`/resultado/${id}`)}
        />

        <ListCars />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  lettersCredit: store.homeReducer.lettersCredit.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLettersCredit
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
