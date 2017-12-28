import React from 'react'
import Modal from '../Modal/Modal'

const DefaultLayout = props => (
  <div>
    <Modal />
    {props.children}
  </div>
)

export default DefaultLayout