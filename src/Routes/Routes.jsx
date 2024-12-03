import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root.jsx";
import Home from "../Pages/Home.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '',
                element: <Home/>
            }
        ]
    }
])