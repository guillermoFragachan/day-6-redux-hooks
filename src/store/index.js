import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import mainReducer from '../reducers'

import thunk from 'redux-thunk'

// my suggestion to start is to think as the FIRST THING about your STORE SHAPE
// I'm planning to use the redux store for sharing the CART and also give to the store
// initial values
const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const initialState = {
  // I'm planning to store the application cart
  favorites: {
    content: [],
  },
  jobs:{
     positions:[]
  }
  // think about the sub-entities you want to save into the redux store
  // the cart deserves more than just an array value, let's create an object for it
  // so if your structure expands in the future you can put into it all the cart-related
  // properties
}

const configureStore = createStore(mainReducer, initialState, aComposeThatAlwaysWorks(applyMiddleware(thunk)))


export default configureStore