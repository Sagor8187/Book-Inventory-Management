import React from "react";
import Layout from "./Component/Layout/Layout";
import { RouterProvider } from "react-router-dom";
import Route from "./Component/Route/Route"
import ListedContext from "./Component/Context/ListedContext";

export default function App() {
  return (
    <ListedContext>
      <RouterProvider router={Route}>
      <Layout></Layout>
    </RouterProvider>
    </ListedContext>
    
  );
}
