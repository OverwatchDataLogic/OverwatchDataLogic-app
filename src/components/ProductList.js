import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

const ProductList = ({ onDelete, onCreate, onUpdate, products }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="删除?" onConfirm={() => onDelete(record.id)}>
            <Button>删除</Button>
          </Popconfirm>
        )
      }
    }
  ]
  return (
    <div>
      <Table
        rowKey={products => products.id}
        dataSource={products}
        columns={columns}
      />
      <Button onClick={() => onCreate()} type="primary">
        新增
      </Button>
      <Button onClick={() => onUpdate()} type="primary">
        修改
      </Button>
    </div>
  )
}

ProductList.propTypes = {
  onDelete: PropTypes.func,
  products: PropTypes.array
}

export default ProductList
