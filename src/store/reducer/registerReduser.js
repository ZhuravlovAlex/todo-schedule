const register = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return true;
        default:
            return state;
    }
}

export default register;