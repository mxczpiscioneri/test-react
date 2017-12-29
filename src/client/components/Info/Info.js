import React, { Children } from 'react'
import styles from './info.css'
import Modal from '../../services/modal'

const Info = (props) => {
  return (
    <span className={props.className} onClick={() => Modal.open(props.title, props.body)}>
      <span className={styles.container}>
        <img src={props.icon}
          title={props.alt}
          alt={props.alt}
          className={props.classImg} />
      </span>
      {props.children}
    </span>
  )
}

export default Info