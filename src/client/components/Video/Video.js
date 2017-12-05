import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from '../Grid/Grid'
import YouTube from 'react-youtube'
import videoImg from './video.jpg'
import playImg from './play.png'
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
                <span className={styles.play}>
                  <img
                    src={playImg} 
                    onClick={(event) => this.setState({ played: true })}/>
                </span>
                <img
                  className={styles.img}
                  src={videoImg} />
              </div>
            )
        }
      </div>
      // <video controls className={styles.video}>
      //   <source src={`https://media.w3.org/2010/05/sintel/trailer_hd.mp4`} type='video/mp4'/>
      // </video>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Video)