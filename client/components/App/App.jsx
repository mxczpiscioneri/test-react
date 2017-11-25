import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { keepLoggedVerify } from '../../services/authentication'
import Routes from '../Routes/Routes'
import { RouteTransition } from 'react-router-transition'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { authenticate } from '../../actions/sessionActions'

injectTapEventPlugin()

const muiTheme = getMuiTheme({

})

class App extends Component {
  componentWillMount() {
    keepLoggedVerify()
    this.props.authenticate()
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Routes />
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticate }, dispatch)

export default connect(null, mapDispatchToProps)(App)