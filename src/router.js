import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/app'

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    models: () => [import('./models/example')],
    component: () => import('./routes/IndexPage')
  })
  const ProductsPage = dynamic({
    app,
    models: () => [import('./models/products')],
    component: () => import('./routes/ProductsPage')
  })

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/products" exact component={ProductsPage} />
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default RouterConfig
