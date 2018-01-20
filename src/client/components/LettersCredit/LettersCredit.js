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
        {
          (props.list && props.list.length > 0)
            ? (
              <Container>
                {
                  props.title
                  && (
                    <Row>
                      <Col {...props.size} offset={props.offset}>
                        {props.title}
                      </Col>
                    </Row>
                  )
                }
                <Hidden xs>
                  <Row>
                    <Col {...props.size} offset={props.offset}>
                      <ListDesktop list={props.list} count={props.count} onClick={props.onClick} />
                    </Col>
                  </Row>
                </Hidden>

                <Hidden sm md lg xl>
                  <ListMobile list={props.list} onClick={props.onClick} />
                </Hidden>
                {
                  this.props.showButton
                  && (
                    <Row>
                      <Col {...props.size} offset={props.offset} className={styles.buttonContainer}>
                        <button className={styles.button} onClick={this._simulateNow.bind(this)}>Quero simular agora</button>
                      </Col>
                    </Row>
                  )
                }
              </Container>
            )
            : null
        }
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
  showButton: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

LettersCredit.defaultProps = {
  list: [],
  count: 4,
  size: { xs: 12, md: 12 },
  offset: {},
  showButton: true
}
