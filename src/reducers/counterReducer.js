// Responsible for Making Changes to Counter
import { INCREMENT, DECREMENT } from '../actions'


const counterReducer = (state = 50, action) => {
  //action parameter = action object: Increment or Decrement 
  switch (action.type) {
    case INCREMENT:
      return state += action.payload //change state (add 1)

    case DECREMENT:
      return state -= action.payload //change to state (subtract 1)

    default:
      return state
  }

}

export default counterReducer