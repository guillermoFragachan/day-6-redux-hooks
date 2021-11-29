import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

// for making use of the redux store from a react component, we need to CONNECT it
// we're going to connect a component wrapping its export

// const mapStateToProps = (state) => {
//   // mapStateToProps is a function that returns an object
//   // all the properties of this object are going to become props for your component
//   return {
//     stefano: state.count,
//   }
// }

// const mapStateToProps = (state) => state
// your returning
// {
//   count: state.count,
//   loading: state.loading,
//   error: state.error,
//   products: state.products,
// }
const mapStateToProps = (state) => ({
  count: state.count,
  lengthToShow: state.products.length,
})

const mapDispatchToProps = (dispatch) => ({
  // every key of this object will be mapped to the props of my component
  increaseCounter: () => {
    dispatch({
      type: 'INCREMENT',
    })
  },
  decreaseCounter: () => {
    dispatch({
      type: 'DECREMENT',
    })
  },
})

function App({ count, lengthToShow, increaseCounter, decreaseCounter }) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button variant='success' onClick={increaseCounter}>
          +
        </Button>
        <h1>{count}</h1>
        <Button variant='danger' onClick={decreaseCounter}>
          -
        </Button>
      </header>
    </div>
  )
}

export default connect(
  // up to two arguments:
  // 1) mapStateToProps <-- mandatory, defines which parts of the redux store we want to receive as props
  // 2) mapDispatchToProps <-- not mandatory, defines which actions we're able to dispatch from the component
  mapStateToProps,
  mapDispatchToProps
)(App)
