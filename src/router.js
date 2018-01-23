import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import AppLayout from './routes/Layout'

const { ConnectedRouter } = routerRedux

const Routers = function RouterConfig({ history, app }) {
  const HomePage = dynamic({
    app,
    models: () => [import('./models/example')],
    component: () => import('./routes/Home/')
  })
  const ProductsPage = dynamic({
    app,
    models: () => [import('./models/products')],
    component: () => import('./routes/Products/')
  })

  return (
    <ConnectedRouter history={history}>
      <AppLayout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/products" exact component={ProductsPage} />
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
