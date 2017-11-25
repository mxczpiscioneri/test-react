import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routePaths from '../../constants/routes'

const Authenticated = props => {
  const {
    isAuthenticated,
    children
  } = props

  return isAuthenticated ? children : null
}

Authenticated.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.sessions.authenticate.received
})

export default connect(mapStateToProps)(Authenticated)