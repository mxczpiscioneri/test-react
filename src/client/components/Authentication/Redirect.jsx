import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class Redirect extends Component {
  componentWillMount () {
    const {
      push,
      url
    } = this.props

    push(url)
  }

  render () {
    return null
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ push }, dispatch)

export default connect(null, mapDispatchToProps)(Redirect)