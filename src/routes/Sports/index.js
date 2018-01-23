import React from 'react'
import { connect } from 'dva'
import { Card } from 'antd'
import { Button } from 'antd'
require('./Sports.css')

const Sports = ({ dispatch }) => {
  return (
    <div className="sports">
      <Card
        title="OWL守望先锋联赛"
        cover={
          <img
            alt="OWL守望先锋联赛"
            src="https://cms-origin-cn.battle.net/cms/blog_header/ma/MAKL0K8V1PGA1509650594083.jpg"
          />
        }
      >
        <Button className="in_button" type="primary" size="large" ghost>
          进入
        </Button>
      </Card>
      <Card
        title="OTS职业战队联赛"
        cover={
          <img
            alt="OTS职业战队联赛"
            src="https://static.zhanqi.tv/assets/web/static/i/ots-2018/bg-1.jpg"
          />
        }
      >
        <Button className="in_button" type="primary" size="large" ghost>
          进入
        </Button>
      </Card>
    </div>
  )
}

export default connect()(Sports)
