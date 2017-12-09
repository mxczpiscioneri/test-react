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
import About from '../About/About'
import Why from '../Why/Why'
import Faq from '../Faq/Faq'
import Result from '../Result/Result'

const Routes = props => (
  <Router history={history}>
    <Route component={RouteTransition} >
      <Route component={DefaultLayout}>
        <Route path={routePaths.root.path}>
          <IndexRoute component={Home} />
        </Route>
        <Route path={routePaths.about.path} component={About} />
        <Route path={routePaths.why.path} component={Why} />
        <Route path={routePaths.faq.path} component={Faq} />
        <Route path={routePaths.result.path} component={Result} />
      </Route>
    </Route>
  </Router>
)

export default Routes