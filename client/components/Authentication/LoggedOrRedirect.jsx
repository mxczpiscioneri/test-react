import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import routePaths from '../../constants/routes'

class LoggedOrRedirect extends Component {
  componentDidMount() {
    const {
      isAuthenticated,
      isLogged,
      push
    } = this.props

    if (isAuthenticated && !isLogged) {
      push(routePaths.path.root)
    }
  }

  render() {
    const {
      isLogged,
      children
    } = this.props

    return isLogged ? children : null
  }
}

LoggedOrRedirect.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  push: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const auth = state.sessions.authenticate

  return {
    isAuthenticated: auth.received,
    isLogged: auth.content.isLogged
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ push }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOrRedirect)