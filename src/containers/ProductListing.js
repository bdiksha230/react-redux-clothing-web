import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";


const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios
                .get("https://fakestoreapi.com/products")
                .catch((err) => {
                    console.log("Error", err);
                });
            dispatch(setProducts(response.data));
        };

        fetchProducts();
    }, [dispatch]);
    console.log("products from server", products);

    return (
        <>
            <ProductComponent />
        </>
    )
};

export default ProductListing;