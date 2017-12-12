import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../../Grid/Grid'
import Slider from 'react-rangeslider'
import styles from './simulateAgain.css'

class SimulateAgain extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 1500,
      labels: {
        0: 'R$ 500',
        10: 'R$ 3.000'
      },
      type: 1
    }
  }

  _changeType = () => {

  }

  format = value => `R$ ${value.toFixed(2)}`

  render() {
    const props = this.props

    return (
      <section className={styles.container}>
        <Container>
          <Row>
            <Col xs={12} md={4} offset={{ md: 1 }}>
              <div className={styles.title}>QUERO SIMULAR OUTRO</div>
              <div className={styles.block}>
                <div
                  className={(this.state.type === 1) ? styles.blockItemSelected : ''}
                  onClick={() => this.setState({ type: 1 })}
                >Valor da Parcela
                </div>
                <div
                  className={(this.state.type === 2) ? styles.blockItemSelected : ''}
                  onClick={() => this.setState({ type: 2 })}>
                  Valor do Bem
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.slider}>
                <div className='slider custom-labels'>
                  <Slider
                    min={500}
                    max={3000}
                    value={this.state.value}
                    labels={this.state.labels}
                    format={this.format}
                    handleLabel={this.state.value.toString()}
                    onChange={(value) => {
                      this.setState({ value })
                    }}
                  />
                  <div className='value'>{this.format(this.state.value)}</div>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SimulateAgain)