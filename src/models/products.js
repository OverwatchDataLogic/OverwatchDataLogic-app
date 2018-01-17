import { message } from 'antd'

export default {
  namespace: 'products',
  state: {
    list: [{ name: 'dva', id: 1 }, { name: 'antd', id: 2 }]
  },
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id)
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
