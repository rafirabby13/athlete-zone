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
            },
            {
                path: '/allSports',
                element: <AllSportsEquipment/>,
                loader: ()=> fetch('http://localhost:5000/equipment')
            },
            {
                path: '/allSports/:id',
                element: <AllSportsDetail/>,
                loader: ({params})=> fetch(`http://localhost:5000/equipment/${params.id}`)
            },
            {
                path: '/myEquipment/:email',
                element: <MyEquipmentList/>,
                loader: ({params})=> fetch(`http://localhost:5000/equip/${params.email}`)
            },
            {
                path: '/updateEquipment/:id',
                element: <UpdateEquipment/>,
                loader: ({params})=> fetch(`http://localhost:5000/equipment/${params.id}`)
            }
        ]
    }
])