import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root.jsx";
import Home from "../Pages/Home.jsx";
import Register from "../Pages/Register.jsx";
import Login from "../Pages/Login.jsx";
import AddEquipment from "../Pages/AddEquipment.jsx";
import AllSportsEquipment from "../Pages/AllSportsEquipment.jsx";
import AllSportsDetail from "../Pages/AllSportsDetail.jsx";
import MyEquipmentList from "../Pages/MyEquipmentList.jsx";
import UpdateEquipment from "../components/UpdateEquipment.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Error from "../Pages/Error.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
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
                element: <PrivateRoute><AddEquipment/></PrivateRoute>
            },
            {
                path: '/allSports',
                element: <AllSportsEquipment/>
            },
            {
                path: '/allSports/:id',
                element: <PrivateRoute><AllSportsDetail/></PrivateRoute>,
                loader: ({params})=> fetch(`https://athlete-zone-server.vercel.app/equipment/${params.id}`)
            },
            {
                path: '/myEquipment',
                element: <PrivateRoute><MyEquipmentList/></PrivateRoute>
            },
            {
                path: '/updateEquipment/:id',
                element: <UpdateEquipment/>,
                loader: ({params})=> fetch(`https://athlete-zone-server.vercel.app/equipment/${params.id}`)
            }
        ]
    }
])