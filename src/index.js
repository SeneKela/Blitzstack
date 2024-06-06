import React from 'react'
import ReactDOM from 'react-dom/client'
import { LineChart } from '@carbon/charts-react'
import data from './data.js'
import options from './options.js'
import '@carbon/charts-react/styles.css'

class App extends React.Component {
  state = {
    data,
    options,
  }

  render = () => (
    <LineChart
      data={this.state.data}
      options={this.state.options}
    ></ LineChart>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
)
