import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/layout/Navbar"
import { UserProvider } from "../context/UserProvider"
import { VehiclePage } from "../pages/vehiclePage"
import { UsersPage } from "../pages/UsersPage"

export const UserRoutes = () => {
    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="users" element={<UsersPage />} />
                    <Route path="vehiculos" element={<VehiclePage />} />
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}