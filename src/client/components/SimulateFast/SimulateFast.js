import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import Slider from 'react-rangeslider'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './simulateFast.css'
import { redirect } from '../../actions/lettersCreditActions'

class SimulateFast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullValue: {
        value: 50000,
        min: 10000,
        max: 90000,
        labels: {
          0: 'R$ 10.000',
          10: 'R$ 90.000'
        }
      },
      installmentValue: {
        value: 1250,
        min: 500,
        max: 2000,
        labels: {
          0: 'R$ 500',
          10: 'R$ 2.000'
        }
      },
      type: 1
    }
  }

  format = value => `R$ ${value.toFixed(2)}`

  render() {
    const blockClass = classNames(
      styles.block,
      {
        [styles.blockMargin]: !this.props.padding,
      }
    )

    return (
      <section className={styles.simulateFast}>
        <Container>
          <Row>
            <Col xs={12} md={4} offset={{ md: 1 }}>
              {
                this.props.showTitle &&
                <div>
                  <div className={styles.title}>QUERO SIMULAR OUTRO</div>
                  <div className={styles.titleXs}>Já consigo ter uma ideia<br /> do que
                    <span className={styles.titleXsStrong}> você precisa :)</span>
                  </div>
                </div>
              }

              <div className={blockClass}>
                <div
                  className={(this.state.type === 1) ? styles.blockItemSelected : ''}
                  onClick={() => this.setState({ type: 1 })}>
                  Valor da Parcela
                </div>
                <div
                  className={(this.state.type === 2) ? styles.blockItemSelected : ''}
                  onClick={() => this.setState({ type: 2 })}>
                  Valor do Bem
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={(this.props.padding) ? styles.sliderPadding : styles.slider}>
                <div className='slider custom-labels'>
                  <Slider
                    min={(this.state.type === 1) ? this.state.installmentValue.min : this.state.fullValue.min}
                    max={(this.state.type === 1) ? this.state.installmentValue.max : this.state.fullValue.max}
                    value={(this.state.type === 1) ? this.state.installmentValue.value : this.state.fullValue.value}
                    labels={(this.state.type === 1) ? this.state.installmentValue.labels : this.state.fullValue.labels}
                    format={this.format}
                    handleLabel={(this.state.type === 1) ? this.state.installmentValue.value.toString() : this.state.fullValue.value.toString()}
                    onChange={(value) => {
                      if (this.state.type === 1) {
                        let installmentValueCopy = this.state.installmentValue
                        installmentValueCopy.value = value
                        this.setState({ installmentValue: installmentValueCopy })
                      } else {
                        let fullValueCopy = this.state.fullValue
                        fullValueCopy.value = value
                        this.setState({ fullValue: fullValueCopy })
                      }
                    }}
                    onChangeComplete={() => {
                      if (this.state.type === 1) {
                        this.props.redirect(`/resultado/parcela/${this.state.installmentValue.value}`)
                      } else {
                        this.props.redirect(`/resultado/veiculo/${this.state.fullValue.value}`)
                      }
                    }}
                  />
                  <div className='value'>{this.format((this.state.type === 1) ? this.state.installmentValue.value : this.state.fullValue.value)}</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ redirect }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SimulateFast)