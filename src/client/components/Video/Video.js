import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import ModalVideo from 'react-modal-video'
import playImg from './icone-play.svg'
import styles from './video.css'

class Video extends React.Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <div className={styles.content}>
            <img
              className={styles.play}
              src={playImg}
              onClick={(event) => this.setState({ isOpen: true })} />
            <ModalVideo
              channel='youtube'
              isOpen={this.state.isOpen}
              videoId='o0k4IypRBgk'
              onClose={() => this.setState({ isOpen: false })} />
            <p className={styles.playTitle}>Saiba mais sobre o <span>Cónsórcio Santander</span></p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Video)