import { exampleService } from '../services'

export default {
  namespace: 'example',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'fetch', payload: {} })
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const data = yield call(exampleService.query)
      console.log(data)
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
