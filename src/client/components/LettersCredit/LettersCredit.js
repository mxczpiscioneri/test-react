import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import scrollToElement from 'scroll-to-element'
import { Container, Row, Col, Hidden } from '../Grid/Grid'
import ListDesktop from './ListDesktop'
import ListMobile from './ListMobile'
import styles from './lettersCredit.css'

export default class LettersCredit extends React.Component {
  constructor(props) {
    super(props)
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
                <ListDesktop list={this.props.list} count={this.props.count} />
              </Col>
            </Row>
          </Hidden>

          <Hidden sm md lg xl>
            <ListMobile list={this.props.list} />
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
  list: PropTypes.array,
  title: PropTypes.element,
  count: PropTypes.number,
  size: PropTypes.object,
  offset: PropTypes.object,
  showButton: PropTypes.bool
}

LettersCredit.defaultProps = {
  list: [],
  count: 4,
  size: { xs: 12, md: 12 },
  offset: {},
  showButton: true
}
