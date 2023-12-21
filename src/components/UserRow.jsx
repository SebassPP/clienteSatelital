import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { AuthContext } from "../auth/context/AuthContext";

export const UserRow = ({id, username, email,role}) => {
    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
    const {login} = useContext(AuthContext);
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            {!(login.role === "ROLE_ADMIN") || 
                        <>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm"
                                    onClick={() => handlerUserSelectedForm({
                                        id,
                                        username,
                                        email,
                                        role
                                    })}
                                >
                                    Actualizar
                                </button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handlerRemoveUser(id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </>
                    }
           
        </tr>
    )
}