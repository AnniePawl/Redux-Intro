// Action 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// Action Creator - function creates action object
const increment = (val = 1) => ({ type: INCREMENT, payload: val })
const decrement = (val = 1) => ({ type: DECREMENT, payload: val })

// Export Constants
export { INCREMENT, DECREMENT, increment, decrement }

