import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import AppLayout from './routes/Layout'

const { ConnectedRouter } = routerRedux

const Routers = function RouterConfig({ history, app }) {
  const HomePage = dynamic({
    app,
    models: () => [import('./models/home')],
    component: () => import('./routes/Home/')
  })
  const AccountPage = dynamic({
    app,
    models: () => [import('./models/account')],
    component: () => import('./routes/Account/')
  })
  const CompetitorsPage = dynamic({
    app,
    models: () => [import('./models/competitors')],
    component: () => import('./routes/Competitors/')
  })
  const SportsPage = dynamic({
    app,
    models: () => [import('./models/sports')],
    component: () => import('./routes/Sports/')
  })

  return (
    <ConnectedRouter history={history}>
      <AppLayout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/account" exact component={AccountPage} />
          <Route path="/competitors" exact component={CompetitorsPage} />
          <Route path="/sports" exact component={SportsPage} />
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

export default Routers
