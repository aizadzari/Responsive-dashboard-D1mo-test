import { authAction } from "./actionTypes"

export const checkLogin = (user, history) => {
    return {
        type: authAction.checkLogin,
        payload: { user, history }
    }
}