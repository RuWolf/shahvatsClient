import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'storeon/react'
import App from './app/App'
import * as serviceWorker from './serviceWorker'
import store from './store/store'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
