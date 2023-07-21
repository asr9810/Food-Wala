import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "../src/Applayout.scss";

import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantCardPage from "./components/RestaurantCardPage";
import Error from "./components/Error";
import Body from "./components/Body";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import EmptyCart from "./components/EmptyCart";
import Contact from "./components/Contact";
// import About from "./components/About";

const About = lazy(()=>import("./components/About"))

const Applayout = () => {
    
    

  return (
    <div>
      <App />
    </div>
  );
}

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Body />,
        },
        {
          path: "Restaurant/:resid",
          element: <RestaurantCardPage />,
        },
        {
          path: "Cart",
          element: <Cart/>
        },
        {
            path: "cart_empty",
            element: <EmptyCart/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "about",
          element: <Suspense fallback={<h2>wait for a second "page is Loading......"</h2>}><About/></Suspense>
        }
      ],
    },
  ]);
  

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
