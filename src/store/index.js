import { createStore } from 'redux'
// 'redux' is the main core library, nothing to do with React yet
import mainReducer from '../reducers'

// this is going to be the initial state for the WHOLE application
// every time we start the app, or refresh the browser, the state will be resetted to this
export const initialState = {
  count: 0,
  loading: true,
  error: false,
  products: [],
}

// createStore takes 3 arguments
// 1) the reducer function
// 2) the initial state of the application
// 3) any middleware or enhancer function (optional)

const configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
// this configureStore will be needed for connecting redux to our react application
