import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Homepage/Home"
import SignupPage from "../pages/Signup/Signup"
import LoginPage from "../pages/Login/Login"
import CreateChapters from "../pages/Create-Chapters/CreateChapters"
import Chapters from "../pages/Chapters/Chapters"
import ChapterDetails from "../pages/ChapterDetails/ChapterDetails.jsx"
import EditChapters from "../pages/Edit-Chapters/EditChapters"
import PrivateRoute from "./PrivateRoutes"
import Gallery from "../pages/Gallery/Gallery"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/capitulos" element={<Chapters />} />
            <Route path="/capitulos/:id" element={<ChapterDetails />} />
            <Route path="/gallery" element={<Gallery />} />



            {/* <Route path="/crear-capitulo" element={<CreateChapters />} />
            <Route path="/editar-capitulo/:id" element={<EditChapters />} /> */}

            <Route path="/crear-capitulo" element={<PrivateRoute />} >
                <Route path="" element={<CreateChapters />} />
            </Route>
            <Route path="/editar-capitulo/:id" element={<PrivateRoute />} >
                <Route path="" element={<EditChapters />} />
            </Route>

            <Route path="*" element={<h1>currarse el 404</h1>} />
        </Routes>


    )
}

export default AppRoutes