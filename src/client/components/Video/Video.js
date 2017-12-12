import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import YouTube from 'react-youtube'
import videoImg from './bg-thumb-video.png'
import playImg from './icone-play.svg'
import styles from './video.css'

class Video extends React.Component {
  constructor() {
    super();

    this.options = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1
      }
    };

    this.state = {
      played: false
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {
          (this.state.played)
            ? (
              <YouTube
                ref={(ref) => this.video = ref}
                videoId="2g811Eo7K8U"
                opts={this.options}
                onReady={(event) => {
                }}
              />)
            : (
              <div className={styles.containerImg}>
                <div className={styles.content}>
                  <img
                    className={styles.play}
                    src={playImg}
                    onClick={(event) => this.setState({ played: true })} />
                  <p className={styles.playTitle}>Saiba mais sobre o <span>Cónsórcio Santander</span></p>
                </div>
              </div>
            )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Video)