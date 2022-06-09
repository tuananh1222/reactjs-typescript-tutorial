import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import {setProducts} from "../redux/actions/productAction";
const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch  = useDispatch();
    const fetchProduct = async () =>{
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) =>{
                console.log("err"+err);
            });
        dispatch(setProducts(response.data));
    };
    useEffect(() =>{
            fetchProduct();
        }, []);

    console.log("Products", products);
    return ( 
        <div className="ui grid container">
            <h1>Product List</h1>
            <ProductComponent />
        </div>
     );
}
 
export default ProductList;