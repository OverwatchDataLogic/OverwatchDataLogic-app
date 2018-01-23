import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import AppHeader from './Header'
import AppFooter from './Footer'
require('../../static/style')

const { Content } = Layout

class AppLayout extends Component {
  render() {
    const { children, dispatch, app, loading, location } = this.props
    return (
      <Layout>
        <AppHeader location={location}/>
        <Content className="main-wrapper">{children}</Content>
        <AppFooter/>
      </Layout>
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object
}

export default withRouter(
  connect(({ app, loading }) => ({ app, loading }))(AppLayout)
)
