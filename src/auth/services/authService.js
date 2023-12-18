import axios from "axios";

export const loginUser = async({username,password}) => {
    try {
        return await axios.post('http://localhost:8080/auth/login',)
    } catch (error) {
        throw error;
    }
}