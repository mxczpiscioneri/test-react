import React from 'react'
import styles from './info.css'
import Modal from '../../services/modal'

const Info = (props) => {
  return (
    <span className={props.className} onClick={() => Modal.open(props.title, props.body)}>
      <span className={styles.container}>
        <img src={props.icon}
          title={props.alt}
          alt={props.alt} />
      </span>
    </span>
  )
}

export default Info