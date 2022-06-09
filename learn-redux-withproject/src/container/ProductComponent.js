import React from "react";
import { useSelector } from "react-redux";
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const productList = products.map((product) =>{
        const {id, price, description, category, image, title} = product;
        return ( 
            <div className="four column wide" key={id}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title}></img>
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">${price}</div>
                        <div className="meta">{description}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            </div>
        );
    });
    return  <>{productList}</>;
}
 
export default ProductComponent;