import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedproduct } from "../redux/actions/productAction";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log("product", product);


    useEffect(() => {
        const fetchProductdetails = async () => {
            const response = await axios
                .get(`https://fakestoreapi.com/products/${productId}`)
                .catch((err) => {
                    console.log("error", err)
                });

            dispatch(selectedProduct(response.data));
        };

        if (productId && productId !== "") fetchProductdetails();

        return () => {
            dispatch(removeSelectedproduct());
        }

    }, [productId, dispatch]);

    return (
        <div className="container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="row">
                   


                    <div className="card mb-3 p-5"  >
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={image} className="img-fluid rounded-start" alt={title} />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body mt-5">
                                    <h1 className="card-title">{title}</h1>
                                    <h4 className="card-text">{category}</h4>
                                    <h4 className="card-text">${price}</h4>
                                    <p className="card-text">{description}</p>
                                    <button className="btn btn-warning btn-lg">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            )}

        </div>
    )
};

export default ProductDetail;