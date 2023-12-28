import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async () => {
        const res = await axios.get('http://localhost:3000/products');
        return res.data;
    }
)
export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (idProduct) => {
        // eslint-disable-next-line no-template-curly-in-string
        await axios.delete('http://localhost:3000/products/' + idProduct);
        const res = await axios.get('http://localhost:3000/products');
        return res.data;
    }
)
export const addProduct = createAsyncThunk(
    'product/addProducts',
    async (data) => {
        const res =await axios.post('http://localhost:3000/products', data);
        return res.data;
    }
)

export const findProductByID = createAsyncThunk(
    'product/findProductById',
    async (id) => {
        const res =await axios.get('http://localhost:3000/products/' + id);
        return res.data;
    }
)