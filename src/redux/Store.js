import {configureStore} from "@reduxjs/toolkit";
import productsReduce from "./product/ProductsSlice";

export const store = configureStore({
    reducer: {
        products: productsReduce
    }
})