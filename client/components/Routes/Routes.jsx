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
import ToDosIndex from '../ToDos/ToDosIndex'

const Routes = props => (
  <Router history={history}>
    <Route component={DefaultLayout}>
      <Route component={DefaultLayout}>
        <Route path={routePaths.root.path}>
          <IndexRoute component={ToDosIndex} />
        </Route>
      </Route>
    </Route>
  </Router>
)

export default Routes