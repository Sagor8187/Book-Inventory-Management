import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import Layout from "../Layout/Layout";
import Readpage from "../Analysis/Readpage";
import BookDetails from "../BookDetails/BookDetails";
import Listbooks from "../../Pages/Listbooks";
const Route = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {index:true,element:<Home></Home>},
            {path:"/listed",element:<Listbooks></Listbooks>},
            {path:"/readpage",element:<Readpage></Readpage>},
            {path: "/details/:id",element:<BookDetails></BookDetails>}
        ]
    }
])
export default Route;