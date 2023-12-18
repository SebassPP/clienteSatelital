import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    role: undefined,
    user: undefined,
}
export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = async ({ username, password }) => {
        
        
        try {
            const response = await loginUser({ username, password });
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split('.')[1])) ;
            const user = { username: claims.username }
            dispatch({
                type: 'login',
                payload: {user,role: claims.role},
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                role: claims.role,
                user,
            }));
            sessionStorage.setItem('token',`Bearer ${token}`);
            navigate('/users');
        } catch (error){
            if(error.response.status === 401){
                Swal.fire('Error Login', 'Username o password invalidos', 'error');
            }else if(error.response.status === 403){
                Swal.fire('Error Login', 'Usuario no autorizado', 'error');
            }else if(error.response.status === 404){

            }else {
                throw error;
            }
            
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('token');
        sessionStorage.clear();
    }
    return {
        login,
        handlerLogin,
        handlerLogout,
    }
}