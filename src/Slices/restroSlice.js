import { createSlice } from "@reduxjs/toolkit"



const restroSlice = createSlice({
    name: "restro",
    initialState: {
        restroList: [],
    },
    reducers:{
        addToRestroList: (state, action) => {
            state.restroList.push(action.payload)
        }
    }
})

export const {addToRestroList} = restroSlice.actions;
export default restroSlice.reducer;