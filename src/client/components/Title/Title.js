import React from 'react'
import classNames from 'classnames'
import styles from './title.css'

const Title = props => {
  const classTitle = classNames(
    styles.title,
    props.className
  )
  return (
    <h3 className={classTitle}>{props.children}</h3>
  )
}

export default Title