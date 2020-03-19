const initialState = 0;

// could also extract payload from the action as well as type
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'INCREMENT':
            return state + payload
        case 'DECREMENT':
            return state - payload
        default:
            return state
    }
}