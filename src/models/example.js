import { exampleService } from '../services'

export default {
  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: 'fetch', payload: {} })
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield call(exampleService.query)
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
