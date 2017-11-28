import React from 'react'
import Routes from '../Routes/Routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const muiTheme = getMuiTheme({

})

const App = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Routes />
  </MuiThemeProvider>
)

export default App