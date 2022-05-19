import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate, Outlet } from 'react-router-dom'
import Spinner from "../components/Spinner/Spinner"

const PrivateRoute = () => {

    const { isLoggedIn, isLoading, user } = useContext(AuthContext)
    //const { showMessage } = useContext(MessageContext)

    if (isLoading) {
        return <Spinner />
    }

    if (!isLoggedIn) {
        // showMessage('No estas autorizad@', 'Solo para el administrador')
        return <Navigate to="/iniciar-sesion" />
    }

    if (isLoggedIn && user.role !== 'ADMIN') {
        // showMessage('No estas autorizad@', 'Solo para el administrador')
        return <Navigate to="/iniciar-sesion" />
    }

    return <Outlet />

}

export default PrivateRoute