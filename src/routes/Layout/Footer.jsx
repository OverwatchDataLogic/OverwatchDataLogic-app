import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Row, Col, Layout } from 'antd'
const { Footer } = Layout

export default class AppFooter extends Component {
  render() {
    return (
      <Footer id="footer" className="footer dark">
        <div className="footer-wrap">
          <Row>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Ant Design</h2>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ant-design/ant-design-pro"
                  >
                    Ant Design Pro GitHub
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://ant.design"
                  >
                    Ant Design
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://mobile.ant.design"
                  >
                    Ant Design Mobile
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://ng.ant.design"
                  >
                    NG-ZORRO
                  </a>
                  <span> - </span>
                  Ant Design of Angular
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/websemantics/awesome-ant-design"
                  >
                    Awesome Ant Design
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>相关资源</h2>
                <div>
                  <a href="http://scaffold.ant.design">Scaffolds</a>
                  <span> - </span>
                  脚手架市场
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://motion.ant.design"
                  >
                    Ant Motion
                  </a>
                  <span> - </span>
                  设计动效
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://library.ant.design/"
                  >
                    Axure Library
                  </a>
                  <span> - </span>
                  设计动效
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://ux.ant.design"
                  >
                    Ant UX
                  </a>
                  <span> - </span>
                  页面逻辑素材
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/dvajs/dva"
                  >
                    dva
                  </a>
                  <span> - </span>
                  应用框架
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/dvajs/dva-cli"
                  >
                    dva-cli
                  </a>
                  <span> - </span>
                  开发工具
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>社区 加入我们</h2>
                <div>
                  <Link to={'/docs/changelog'}>更新记录</Link>
                </div>
                <div>
                  <Link to={'/docs/faq'}>常见问题</Link>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gitter.im/ant-design/ant-design-pro"
                  >
                    在线讨论
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ant-design/ant-design-pro/issues"
                  >
                    常见问题
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'http://ant.design/docs/resource/work-with-us'}
                  >
                    讨论列表
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>更多产品</h2>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://antv.alipay.com/"
                  >
                    AntV
                  </a>
                  <span> - </span>
                  蚂蚁数据可视化方案
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://eggjs.org/"
                  >
                    Egg
                  </a>
                  <span> - </span>
                  企业级 Node Web 开发框架
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="bottom-bar">
          <Col lg={6} sm={24} />
          <Col lg={18} sm={24}>
            <span style={{ marginRight: 24 }}>
              <a
                href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                隐私权政策 | 权益保障承诺书
              </a>
            </span>
            <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
            <span style={{ marginRight: 12 }}>
              Copyright © 蚂蚁金融服务集团
            </span>
          </Col>
        </Row>
      </Footer>
    )
  }
}
