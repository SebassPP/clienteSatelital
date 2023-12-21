import axios from "axios"

const BASE_URL = "http://localhost:8080/users";
const config = () => {
    return{
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    };
}



export const  findAll = async() => {
    try {
        const response = await axios.get(BASE_URL,config());
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;  
}

export const save =async({username, password, email}) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            password,
            email
        },config());
    } catch (error) {
        throw error;
    }
}

export const update = async({id, username, email}) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
        },config());
    } catch (error) {
        throw error;
    }
}

export const remove = async(id) => {
    try {
        return await axios.delete(`${BASE_URL}/${id}`,config());
    } catch (error) {
        throw error; 
    } 
}

