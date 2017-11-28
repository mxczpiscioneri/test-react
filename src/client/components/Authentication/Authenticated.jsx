import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { keepLoggedVerify } from '../../services/authentication'
import { authenticate } from '../../actions/sessionsActions'
import routePaths from '../../constants/routes'

class Authenticated extends Component {
  componentWillMount () {
    const {
      authenticate,
      force
    } = this.props

    keepLoggedVerify()
    authenticate({ force })
  }

  render () {
    const {
      _authenticate,
      children
    } = this.props

    return !_authenticate.fetching && _authenticate.received ? children : null
  }
}

Authenticated.propTypes = {
  _authenticate: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  _authenticate: state.sessionsReducer.authenticate
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated)