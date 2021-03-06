import React from 'react'
import {
  Router,
  Route,
  IndexRoute
} from 'react-router'
import { history } from '../../services/store'
import routePaths from '../../constants/routes'
import RouteTransition from '../RouteTransition/RouteTransition'
import LoggedOrRedirect from '../Authentication/LoggedOrRedirect'
import NotLoggedOrRedirect from '../Authentication/NotLoggedOrRedirect'
import Authenticated from '../Authentication/Authenticated'
import DefaultLayout from '../Layouts/DefaultLayout'
import Home from '../Home/Home'
import Result from '../Result/Result'
import About from '../About/About'
import Why from '../Why/Why'
import Faq from '../Faq/Faq'
import ImInterested from '../ImInterested/ImInterested'

const Routes = props => {
  const onChange = () => {
    objDataLayer = {
      'pageName': `/webmotors/consorcio/${window.location.pathname == '/' ? 'home' : window.location.pathname.split('/')[1]}`,
      'usrID': 'md5'
    }
    _satellite.track('customPageView')
  }

  return (
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Route component={RouteTransition} >
        <Route component={DefaultLayout} onChange={onChange}>
          <Route path={routePaths.root.path}>
            <IndexRoute component={Home} />
          </Route>
          <Route path={routePaths.result.path} component={Result} />
          <Route path={routePaths.resultValue.path} component={Result} />
          <Route path={routePaths.resultInstallment.path} component={Result} />
          <Route path={routePaths.about.path} component={About} />
          <Route path={routePaths.why.path} component={Why} />
          <Route path={routePaths.faq.path} component={Faq} />
          <Route path={routePaths.imInterested.path} component={ImInterested} />
        </Route>
      </Route>
    </Router>
  )
}

export default Routes