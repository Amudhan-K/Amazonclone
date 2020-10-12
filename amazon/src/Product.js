// no 5

import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();

    const addToBasket=() => {
        //Add items to basket..
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title, 
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
         /* component for title price image rating  */
            <div className="product">
                <div className="Product_info">
                    <p>{title}</p>
                    <p className="Product__Price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="Productrating">
                        {Array(rating)
                        .fill()
                        .map((_)=> (
                            <p>*</p>
                        ))}
                        
                    </div>
                </div> 
                          
                <img src={image} alt=""/>
                <button onClick={addToBasket}>Add to basket</button>
                
            </div>
           
    ); 
}

export default Product;
