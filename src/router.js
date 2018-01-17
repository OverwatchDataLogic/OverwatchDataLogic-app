import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'
import IndexPage from './routes/IndexPage'

function RouterConfig({ history, app }) {
  const ProductsPage = dynamic({
    app,
    models: () => [import('./models/products')],
    component: () => import('./routes/ProductsPage')
  })

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={ProductsPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
