import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin:false,
    user: undefined,
    role: undefined,
}
export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = async({ username, password }) => {
       
        try {
            const response = await loginUser({ username, password });
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split('.')[1]));//decodificamos y obtenemos el payload que esta en el 1
            console.log(claims);//convertir JSON STring a JSON
            const user = { username: response.data.username }
            dispatch({
                type: 'login',
                //Agregar user, isAdmin y role a el payload
                payload: {user, isAdmin: claims.isAdmin, role: claims.role},
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
                role: claims.role,
            }));
            //Guardar token en sessionStorage
            sessionStorage.setItem('token',`Bearer ${token}`);
            navigate('/users');
        } catch (error) {
            if (error.response?.status === 401){
                Swal.fire('Error Login', 'Username o password invalidos', 'error');
            }else if (error.response?.status === 403){
                Swal.fire('Error Login', 'No tiene acceso al recurso o permisos', 'error');
            }else{
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