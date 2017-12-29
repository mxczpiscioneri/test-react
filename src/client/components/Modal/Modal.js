import React from 'react'
import eventBus from 'eventing-bus'
import classNames from 'classnames'
import styles from './modal.css'
import InfoImg from './info.svg'

export default class Modal extends React.Component {
  constructor() {
    super()

    this.state = {
      opened: false,
      title: '',
      body: ''
    }

    eventBus.on('consorcio.santander.openModal', (payload) => {
      const { title, body } = payload

      this.setState({
        opened: true,
        title,
        body
      })
    })

    eventBus.on('consorcio.santander.closeModal', () => {
      this.setState({
        opened: false,
        title: '',
        body: ''
      })
    })
  }

  close () {
    this.setState({
      opened: false
    })
  }

  render() {
    const classess = classNames(
      styles.modal,
      {
        [styles.modalOpened]: this.state.opened 
      }
    )

    return (
      <div className={classess}>
        <div className={styles.modalBackdrop}>
        </div>
        <div className={styles.modalDialog}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <span className={styles.iconTitle}>
                <img src={InfoImg} />
              </span>
              <h3 className={styles.title}>{this.state.title}</h3>
            </div>
            <div className={styles.modalBody}>
              {this.state.body}
            </div>
            <span className={styles.modalClose} onClick={this.close.bind(this)}>Fechar</span>
          </div>
        </div>
      </div>      
    )
  }
}