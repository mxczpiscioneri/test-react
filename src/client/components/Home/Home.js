import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import {
  getLettersCredit,
  getVehicles,
  getVideo
} from '../../actions/homeActions'
import Menu from '../Menu/Menu'
import Banner from '../Banner/Banner'
import WhyBuy from '../WhyBuy/WhyBuy'
import Video from '../Video/Video'
import Testimonial from '../Testimonial/Testimonial'
import LettersCredit from '../LettersCredit/LettersCredit'
import ListCars from '../ListCars/ListCars'
import Footer from '../Footer/Footer'
import Title from '../Title/Title'
import styles from './home.css'

class Home extends Component {
  componentWillMount() {
    this.props.getLettersCredit()
    this.props.getVehicles()
    this.props.getVideo()
  }

  render() {
    return (
      <div>
        <Menu transparent notSticky />

        <Banner form mask hiddenSubTitleXS type={'home'} />

        <WhyBuy />

        {
          this.props.video &&
          <Video source={this.props.video} />
        }

        <Testimonial type={'home'} />

        <LettersCredit title={
          <Title className={styles.lettersTitle}>Veja algumas das nossas cartas de crédito</Title>
        }
          list={this.props.lettersCredit}
          onClick={(id) => this.props.router.push(`/resultado/${id}`)}
        />

        <ListCars vehicles={this.props.vehicles} />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  lettersCredit: store.homeReducer.lettersCredit.content,
  vehicles: store.homeReducer.vehicles.content,
  video: store.homeReducer.video.content
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getLettersCredit,
  getVehicles,
  getVideo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
