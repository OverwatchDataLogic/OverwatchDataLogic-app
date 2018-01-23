import React from 'react'
import { connect } from 'dva'
import styles from './Home.css'

const Home = ({ dispatch }) => {
  return (
    <div>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div style={{ fontSize: 24 }}>
        <a href="/products">/Products</a>
      </div>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  )
}

Home.propTypes = {}

export default connect()(Home)
