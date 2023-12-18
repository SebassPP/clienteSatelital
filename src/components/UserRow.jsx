import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const UserRow = ({id, username, email}) => {
    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        id,
                        username,
                        email
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
        </tr>
    )
}