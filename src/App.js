import './App.css';

import React from "react";

import {Route, Routes} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import ListProduct from "./page/home/product/ListProduct";
import EditProduct from "./page/home/product/EditProduct";
import CreateProduct from "./page/home/product/CreateProduct";
import Home from "./page/Home";
import DetailProduct from "./page/home/product/DetailProduct";


function App() {
    return (
        <div className="container-fluid">
            <ToastContainer/>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'/'} element={<ListProduct/>}></Route>
                    <Route path={'/editProduct/:id'} element={<EditProduct/>}></Route>
                    <Route path={'/createProduct'} element={<CreateProduct/>}></Route>
                    <Route path={'/detailProduct/:id'} element={<DetailProduct/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
