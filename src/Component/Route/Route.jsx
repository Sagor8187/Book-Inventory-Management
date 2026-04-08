import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import Layout from "../Layout/Layout";
const Route = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {index:true,element:<Home></Home>},
        ]
    }
])
export default Route;