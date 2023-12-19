import axios from "axios"

const BASE_URL = "http://localhost:8080/users";
export const  findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
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
        });
    } catch (error) {
        throw error;
    }
}

export const update = async({id, username, email}) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async(id) => {
    try {
        return await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.log(error);
    }
    return undefined;   
}

