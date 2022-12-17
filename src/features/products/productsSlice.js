import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : []
}
const getProduct = createAsyncThunk("products/getProduct", async ()=> {
    
})
const productSlice = createSlice({
    name:'products',
    initialState,   
    extraReducers:{}
});


export default productSlice.reducer;