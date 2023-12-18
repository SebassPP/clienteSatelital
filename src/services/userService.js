import axios from "axios"

export const findAll = () => {

    return axios.get("http://localhost:3000/users")
        .then(response => response.data)
        .catch(error => console.log(error))

}