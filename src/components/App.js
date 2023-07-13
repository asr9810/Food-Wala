import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utility/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
