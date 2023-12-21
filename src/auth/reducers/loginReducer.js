
export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                isAdmin: action.payload.isAdmin,
                user: action.payload.user,
                role: action.payload.role,
            };
        case 'logout':
            return {
                isAuth: false,
                isAdmin: false,
                user: undefined,
                role: undefined,
            };
        default:
            return state;
    }

}