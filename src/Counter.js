import React from 'react'
import { increment, decrement } from './actions'
import { connect } from 'react-redux'

const Counter = (props) => {
  return (
    <div>
      <h1> {props.count} </h1>
      <button onClick={() => props.increment()}> UP </button>
      <button onClick={() => props.decrement()}> DOWN </button>
    </div>
  )
}


const mapStateToProps = (state) => {
  return { count: state.counter }

}

// Map Dispatch to Action Creators
const mapStateToDispatch = () => {
  return { increment, decrement }
}


// Export Higher Order Function 
// Connect takes in function and object 
// Connect method returns function 
export default connect(mapStateToProps, mapStateToDispatch())(Counter)