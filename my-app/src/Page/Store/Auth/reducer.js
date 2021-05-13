import { authAction } from "./actionTypes";

const login = (state, action) => {
    switch (action.type) {
        case authAction.checkLogin:
            state = {
                ...state,
                loading: true
            }
            break;
        default:
            state = { ...state };
            break;
    }
}