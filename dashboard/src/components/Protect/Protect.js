import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext"


export const ProtectRoute = () => {
    const { isLoggedIn, loading } = useAuth();

    if (loading) {
        return <h5>Loading.....</h5>
    }
    if (!isLoggedIn) {
        return <Navigate to="/login" replace></Navigate>
    }
    return <Outlet />

}