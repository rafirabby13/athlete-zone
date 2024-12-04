import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root.jsx";
import Home from "../Pages/Home.jsx";
import Register from "../Pages/Register.jsx";
import Login from "../Pages/Login.jsx";
import AddEquipment from "../Pages/AddEquipment.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/addEquipment',
                element: <AddEquipment/>
            }
        ]
    }
])