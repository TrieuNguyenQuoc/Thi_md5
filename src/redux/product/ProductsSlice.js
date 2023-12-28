import {createSlice} from "@reduxjs/toolkit";
import {addProduct, deleteProduct, findProductByID, getProduct} from "../../service/ProductService";

const initialState = {
    products: []
}
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProduct.fulfilled, (state, action)=>{
            state.products = action.payload
        })
        builder.addCase(deleteProduct.fulfilled, (state, action)=>{
            state.products = action.payload
        })
        builder.addCase(addProduct.fulfilled, (state, action)=>{
            state.products = action.payload
        })
        builder.addCase(findProductByID.fulfilled, (state, action)=>{
            state.products = action.payload
        })
    }
})
export default productsSlice.reducer;