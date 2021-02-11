import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import reportWebVitals from './reportWebVitals'

import 'antd/lib/style/themes/default.less'
import 'antd/dist/antd.less'
import './index.scss'

// https://github.com/ant-design/ant-design/issues/22493
// some components of `antd` is throwing a console error
// this is a workaround but I think this is not the best way to deal with it
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
