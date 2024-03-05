import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home, Cart, Categories, ProductList, ProductDetails} from "./pages"

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path: "/categories",
        element: (
                <Categories />
        ),
      },
      {
        path: "/productList",
        element: (
                <ProductList />
        ),
      },
      {
        path: "/cart",
        element: (
                <Cart />
        ),
      },
      {
        path: "/productdetails/:id",
        element: (
                <ProductDetails />
        ),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
