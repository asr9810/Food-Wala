import React from "react";
import { createRoot } from 'react-dom/client'
import '../src/Applayout.scss'

import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantCardPage from "./components/RestaurantCardPage";
import Error from "./components/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path:'',
                element: <Body/>
            },
            {
                path: 'Restaurant/:resid',
                element: <RestaurantCardPage/>
            },
            {
                path: 'Cart',
                element: <Cart/>
            }
        ]
    },
    
])


const Applayout = () => (
    <div>
        <App/>
    </div>
);

const root = createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)