import React from 'react'
import { connect } from 'dva'
import styles from './IndexPage.css'

const app = ({ dispatch, children }) => {
  return <div className={styles.normal}>{children}</div>
}

app.propTypes = {}

export default connect()(app)
