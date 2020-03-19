const initialState = false;

export default (state = initialState, { type }) => {
    switch (type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}
