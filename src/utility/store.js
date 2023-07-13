import cartSlice from "../Slices/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
})

export default store