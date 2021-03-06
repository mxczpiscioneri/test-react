import React from 'react'
import Routes from '../Routes/Routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { StickyContainer } from 'react-sticky'

injectTapEventPlugin()

const muiTheme = getMuiTheme({

})

objDataLayer = {
  'pageName': `/webmotors/consorcio/${window.location.pathname == '/' ? 'home' : window.location.pathname.split('/')[1]}`,
  'usrID': 'md5'
}

const App = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <StickyContainer>
      <Routes />
    </StickyContainer>
  </MuiThemeProvider>
)

export default App