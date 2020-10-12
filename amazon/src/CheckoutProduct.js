import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";


function CheckoutProduct({id,title,image,price,rating}) { 
    const [{},dispatch]=useStateValue();

    console.log(id,title,image,price,rating);    

    const removeFromBasket=() => {
    //remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });    
    }

    return (
        <div className="checkout_product">
            <img className="checkoutproduct_images" src={image} alt=""/>

            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>*</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct;