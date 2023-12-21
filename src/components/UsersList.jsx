import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { UserRow } from "./UserRow"
import { AuthContext } from "../auth/context/AuthContext";

export const UsersList = () => {

    const { users } = useContext(UserContext);
    const {login} = useContext(AuthContext);
    return (
        <table className="table table-hover table-striped">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                    {!(login.role === "ROLE_ADMIN") || 
                        <>
                            <th>Actualizar</th>
                            <th>Eliminar</th>
                        </>
                    }
                    
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, username, email }) => (
                        <UserRow
                            key={id}
                            id={id}
                            username={username}
                            email={email} />
                    ))
                }
            </tbody>
        </table>
    )
}