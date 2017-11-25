import React from 'react'
import { RouteTransition as Transition } from 'react-router-transition'

const RouteTransition = props => {
  const {
    location,
    children
  } = props

  return (
    <Transition
      pathname={location.pathname}
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
      {children}
    </Transition>
  )
}

export default RouteTransition