import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products?.map((product) => {
        const { id, title, image, price, category } = product;

        return (
            <div className="col-6 col-md-3 col-lg-4 mb-5" key={id}>
                <Link to={`/product/${id}`} >
                    <div className="card"  >
                        <img src={image} className="card-img-top p-2 row_productimg" alt={title} />
                        <div className="card-body">
                            <h3 className="card-title ">{title}</h3>
                            <p className="card-text">  ${price}</p>
                            <p className="card-text category_all">{category}</p>
                            {/* <button className="btn btn-warning btn-lg">Add to Cart</button> */}
                            
                        </div>
                    </div>
                </Link>
            </div>

        );
    })


    return (
        <div className="container ">
            <div className="row">
                {renderList}
            </div>
        </div>


    )
};

export default ProductComponent;