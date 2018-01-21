import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import Slider from 'react-rangeslider'
import { Container, Row, Col } from '../Grid/Grid'
import styles from './simulateFast.css'
import { changeType, changeFullValue, changeInstallmentValue } from '../../actions/simulateFastActions'
import { redirect } from '../../actions/resultActions'

class SimulateFast extends Component {

  format = value => `R$ ${value.toLocaleString('pt-BR')}`

  render() {
    const blockClass = classNames(
      styles.block,
      {
        [styles.blockMargin]: !this.props.padding,
      }
    )

    const buttonClass = classNames(
      styles.button,
      {
        [styles.buttonTitle]: this.props.padding
      }
    )

    const simulateFast = this.props.simulateFast

    return (
      <section className={styles.simulateFast}>
        <Container>
          <Row>
            <Col xs={12} md={3} offset={{ md: 1 }}>
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
                  className={(simulateFast.type === 1) ? styles.blockItemSelected : ''}
                  onClick={() => this.props.changeType(1)}>
                  Valor da Parcela
                </div>
                <div
                  className={(simulateFast.type === 2) ? styles.blockItemSelected : ''}
                  onClick={() => this.props.changeType(2)}>
                  Valor do Veículo
                </div>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className={(this.props.padding) ? styles.sliderPadding : styles.slider}>
                <div className='slider custom-labels'>
                  <Slider
                    min={(simulateFast.type === 1) ? simulateFast.installmentValue.min : simulateFast.fullValue.min}
                    max={(simulateFast.type === 1) ? simulateFast.installmentValue.max : simulateFast.fullValue.max}
                    value={(simulateFast.type === 1) ? parseFloat(simulateFast.installmentValue.value) : parseFloat(simulateFast.fullValue.value)}
                    labels={(simulateFast.type === 1) ? simulateFast.installmentValue.labels : simulateFast.fullValue.labels}
                    format={this.format}
                    step={10}
                    handleLabel={(simulateFast.type === 1) ? this.format(simulateFast.installmentValue.value) : this.format(simulateFast.fullValue.value)}
                    onChange={(value) => {
                      // value = value.toFixed(2)
                      value = parseFloat(value.toFixed(2))
                      if (simulateFast.type === 1) {
                        this.props.changeInstallmentValue(value)
                      } else {
                        this.props.changeFullValue(value)
                      }
                    }}
                  />
                  <div className='value'>{this.format((simulateFast.type === 1) ? simulateFast.installmentValue.value : simulateFast.fullValue.value)}</div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <button className={buttonClass} onClick={() => {
                if (simulateFast.type === 1) {
                  this.props.redirect(`/resultado/parcela/${simulateFast.installmentValue.value}`)
                } else {
                  this.props.redirect(`/resultado/veiculo/${simulateFast.fullValue.value}`)
                }
              }}>SIMULAR</button>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    simulateFast: state.simulateFastReducer.simulateFast
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeType, changeFullValue, changeInstallmentValue, redirect }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SimulateFast)