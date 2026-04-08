import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import Layout from "../Layout/Layout";
import Listed from "../Listed/Listed";
const Route = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {index:true,element:<Home></Home>},
            {path:"/listed",element:<Listed></Listed>}
        ]
    }
])
export default Route;