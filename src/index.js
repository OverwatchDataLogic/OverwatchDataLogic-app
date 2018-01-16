import dva from 'dva'
import { message } from 'antd'
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import 'babel-polyfill'
import './index.css'

// 1. Initialize
const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message)
  }
})

// 2. Plugins
app.use(
  createLoading({
    effects: true
  })
)

// 3. Model
app.model(require('./models/example').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
