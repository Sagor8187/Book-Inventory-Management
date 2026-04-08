import React from "react";
import Layout from "./Component/Layout/Layout";
import { RouterProvider } from "react-router-dom";
import Route from "./Component/Route/Route"

export default function App() {
  return (
    <RouterProvider router={Route}>
      <Layout></Layout>
    </RouterProvider>
  );
}
