// Action 
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Action Creator - function creates action object
const increment = () => { type: INCREMENT }
const decrement = () => { type: DECREMENT }

// Export Constants
export { INCREMENT, DECREMENT, increment, decrement }

