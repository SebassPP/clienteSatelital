
export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                role: action.payload.role,
                user: action.payload.user,
            };
        case 'logout':
            return {
                isAuth: false,
                role: undefined,
                user: undefined,
            };
        default:
            return state;
    }

}