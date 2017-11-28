import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'
import Redirect from './Redirect'

const _LoggedOrRedirect = props => {
  const {
    isLogged,
    redirectUrl,
    children
  } = props

  return isLogged ? children : <Redirect url={redirectUrl} />
}

const mapStateToProps = state => {
  const sessions = state.sessionsReducer
  const auth = sessions.authenticate
  const redirectUrl = sessions.redirectUrl.content

  return {
    isLogged: auth.content.isLogged,
    redirectUrl
  }
}

const _LoggedOrRedirectComponent = connect(mapStateToProps)(_LoggedOrRedirect)

const LoggedOrRedirect = props => {
  const {
    children
  } = props

  return (
    <Authenticated>
      <_LoggedOrRedirectComponent>
        {children}
      </_LoggedOrRedirectComponent>
    </Authenticated>
  )
}

export default LoggedOrRedirect