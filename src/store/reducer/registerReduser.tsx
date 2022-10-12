import { RegisterAction } from "../../types";

const register = (state = false, action: RegisterAction) => {
    switch (action.type) {
        case 'SIGN_UP':
            return true;
        default:
            return state;
    }
}

export default register;