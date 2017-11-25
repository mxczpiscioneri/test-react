import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import { Redirect } from 'react-router'
import routePaths from '../../constants/routes'

class NotLoggedOrRedirect extends Component {
  componentWillUpdate(nextProps) {
    const {
      isLogged,
      push
    } = this.props

    if(nextProps.isLogged && !isLogged)
      push(routePaths.path.root)
  }

  render() {
    const {
      isLogged,
      children
    } = this.props

    return isLogged ? null : children
  }
}

const mapStateToProps = state => ({
  isLogged: state.authentication.isLogged
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ push }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NotLoggedOrRedirect)