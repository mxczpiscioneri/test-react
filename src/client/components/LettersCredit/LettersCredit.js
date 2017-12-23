import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import scrollToElement from 'scroll-to-element'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import ListDesktop from './ListDesktop'
import ListMobile from './ListMobile'
import styles from './lettersCredit.css'

const letters = [
  { value: 30.000, installment: 900, installmentFlex: 500, deadline: 72 },
  { value: 45.000, installment: 900, installmentFlex: 500, deadline: 72 },
  { value: 60.000, installment: 900, installmentFlex: 500, deadline: 72 },
  { value: 90.000, installment: 900, installmentFlex: 500, deadline: 72 }
]

class LettersCredit extends React.Component {
  constructor(props) {
    super(props)

    let lettersToShow = letters.slice(0, props.count)
    this.state = {
      letters: lettersToShow
    }
  }

  _simulateNow() {
    scrollToElement("#Banner", { offset: 55, duration: 700 })
  }

  render() {
    const props = this.props
    return (
      <section className={styles.container}>
        <Container>
          {
            props.title
            && (
              <Row>
                <Col {...this.props.size} offset={this.props.offset}>
                  {props.title}
                </Col>
              </Row>
            )
          }
          <Hidden xs>
            <Row>
              <Col {...this.props.size} offset={this.props.offset}>
                <ListDesktop list={this.state.letters} count={this.props.count} />
              </Col>
            </Row>
          </Hidden>

          <Hidden sm md lg xl>
            <ListMobile list={this.state.letters} />
          </Hidden>
          {
            this.props.showButton
            && (
              <Row>
                <Col {...this.props.size} offset={this.props.offset} className={styles.buttonContainer}>
                  <button className={styles.button} onClick={this._simulateNow.bind(this)}>Quero simular agora</button>
                </Col>
              </Row>
            )
          }
        </Container>
      </section>
    )
  }
}

LettersCredit.propTypes = {
  title: PropTypes.element,
  count: PropTypes.number,
  size: PropTypes.object,
  offset: PropTypes.object,
  showButton: PropTypes.bool
}

LettersCredit.defaultProps = {
  count: 4,
  size: { xs: 12, md: 12 },
  offset: {},
  showButton: true
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LettersCredit)