// a reducer function always takes 2 arguments:
// 1) the current state of the application
// 2) the action that just got dispatched

import { initialState } from '../store'

// the reducer MUST be a PURE FUNCTION
// this means no side-effects are allowed here (like API calls)
// the computed state it returns MUST be the result of just a mathematical process
// with the same input, the output MUST the also the same
// a pure function NEVER MUTATES ITS ARGUMENTS (for immutability reasons)
// the state and the action must not be mutated or affected during the computation of the new state

// the state parameter defaults to the initial one for good measure
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // you want to return a new state object from EVERY reducer case
        // the object you're going to return is mostly going to be exactly like the old one
        // so I'm gonna start with a spread operator ..., which takes all the properties
        // from the state and creates a copy of it. And then I'm going to overwrite
        // one single property, the count
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      // we're going to fall into the default case if no other case is matched
      // your default case in a reducer will ALWAYS look like this!
      return state
  }
}

export default mainReducer
