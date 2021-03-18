import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import makeStore from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
const store = makeStore()

const WithProvider = () => (
  <Provider store={store}>
      <Router>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render(<WithProvider />, document.getElementById('root'))
