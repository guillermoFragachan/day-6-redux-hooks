import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, GET_JOBS } from '../actions'
import { initialState } from '../store'

// the reducer's job is ALWAYS to return a valid state for the application
// the SHAPE of the state you're supposed to return from every case is the SAME
// as the initialValue you're providing to it

// a PURE FUNCTION never mutates its arguments

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          // SUPER WRONG --> state.FAVORITE.content.push(action.payload) // action.payload
          // THIS WORKS: content: state.FAVORITE.content.concat(action.payload),
          content: [...state.favorites.content, action.payload], // <- just my preference
        },
      }
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter((el, i) => i !== action.payload), // <- it works!
          //   content: [...state.FAVORITE.content.slice(0, action.payload), ...state.FAVORITE.content.slice(action.payload + 1)],
          // this also works, slightly more complex... :)
        },
      }
      case GET_JOBS:
        return{
          ...state,
          jobs:{
            positions: action.payload
          }
        }
    default:
      return state
  }
}

export default mainReducer