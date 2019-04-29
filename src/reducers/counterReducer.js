// Responsible for Making Changes to Counter
import { INCREMENT, DECREMENT } from '../actions'


const counterReducer = (state = 0, action) => {
  // action parameter = action object: Increment or Decrement 
  switch (action.type) {
    case INCREMENT:
      // making changes to state (add 1)
      return state += 1

    case DECREMENT:
      // making changes to state (subtract 1)
      return state -= 1

    default:
      return state
  }

}

export default counterReducer