import React from 'react'
import ReactDOM from 'react-dom'
/* Components */
import App from './App'

/* Redux */
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers/rootR'

/* Styles */
import './styles/index.css'

/* Other */
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
registerServiceWorker()
