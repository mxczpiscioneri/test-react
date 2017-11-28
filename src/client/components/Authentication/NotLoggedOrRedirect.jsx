import React from 'react'
import { connect } from 'react-redux'
import routePaths from '../../constants/routes'
import Authenticated from './Authenticated'
import Redirect from './Redirect'

const _NotLoggedOrRedirect = props => {
  const {
    isLogged,
    children
  } = props

  return !isLogged ? children : <Redirect url={routePaths.profile} />
}

const mapStateToProps = state => {
  const auth = state.sessionsReducer.authenticate

  return {
    isLogged: auth.content.isLogged
  }
}

const _NotLoggedOrRedirectComponent = connect(mapStateToProps)(_NotLoggedOrRedirect)

const NotLoggedOrRedirect = props => {
  const {
    children
  } = props

  return (
    <Authenticated>
      <_NotLoggedOrRedirectComponent>
        {children}
      </_NotLoggedOrRedirectComponent>
    </Authenticated>
  )
}

export default NotLoggedOrRedirect