import cartSlice from "../Slices/cartSlice";
import restroSlice from "../Slices/restroSlice";

const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer:{
        cart: cartSlice,
        restro: restroSlice,
    }
})

export default store