import { message } from 'antd'

export default {
  namespace: 'products',
  state: {
    list: [
      {
        name: 'dva',
        id: '915fe890-fcc8-11e7-b75a-a9fc5503fcc1'
      },
      {
        name: 'antd',
        id: '97692a80-fcc8-11e7-b75a-a9fc5503fcc1'
      }
    ]
  },
  reducers: {
    create(state, { payload: values }) {
      return { ...state, list: [...state.list, values] }
    },
    update(state, { payload }) {
      const data = state.list.map(item => {
        if (item.id === payload.id) {
          return { ...item, ...payload }
        } else {
          return item
        }
      })
      return {
        ...state,
        list: data
      }
    },
    delete(state, { payload: id }) {
      const list = state.list.filter(item => item.id !== id)
      return {
        ...state,
        list
      }
    }
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/products') {
          message.info('欢迎来到产品页')
        }
      })
    }
  }
}
