import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { UserProvider } from "../context/UserProvider"
import { VehiclePage } from "../pages/vehiclePage"
import { UsersPage } from "../pages/UsersPage"
import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"

export const UserRoutes = () => {

    const {login} = useContext(AuthContext);

    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    {!(login.role === "ROLE_ADMIN") || 
                        <>
                            <Route path="vehiculos" element={<VehiclePage />} />
                            <Route path="/" element={<Navigate to="/users" />} />
                        </>
                    }
                    
                </Routes>
            </UserProvider>
        </>
    )
}