import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'dva/router'
import { Row, Col, Menu, Layout } from 'antd'
const { Header } = Layout

export default class AppHeader extends Component {
  render() {
    const { location } = this.props
    const path = location.pathname
    const module = location.pathname
      .replace(/(^\/|\/$)/g, '')
      .split('/')
      .join('/')
    let activeMenuItem = module || 'home'
    if (/^sports/.test(path)) {
      activeMenuItem = 'sports'
    } else if (/^competitors/.test(path)) {
      activeMenuItem = 'competitors'
    } else if (/^account/.test(path)) {
      activeMenuItem = 'account'
    } else if (path === '/') {
      activeMenuItem = 'home'
    }
    return (
      <Header id="header" className="header">
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={9} xs={0}>
            <Link id="logo" to="/">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                alt="logo"
              />
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg"
                alt="Ant Design Pro"
              />
            </Link>
          </Col>
          <Col
            xxl={{ span: 4, offset: 16 }}
            xl={{ span: 7, offset: 12 }}
            lg={{ span: 8, offset: 8 }}
            md={{ span: 10, offset: 6 }}
            sm={{ span: 15, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
          >
            <Menu
              mode="horizontal"
              selectedKeys={[activeMenuItem]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to="/home">主页</Link>
              </Menu.Item>
              <Menu.Item key="sports">
                <Link to="/sports">赛事</Link>
              </Menu.Item>
              <Menu.Item key="competitors">
                <Link to="/competitors">选手</Link>
              </Menu.Item>
              <Menu.Item key="account">
                <Link to="/account">我的</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    )
  }
}

AppHeader.propTypes = {
  location: PropTypes.object
}
