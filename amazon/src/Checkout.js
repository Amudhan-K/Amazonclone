import React from 'react';
import {useStateValue} from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";


function Checkout() {
    const [{basket}]=useStateValue();

    return (
        
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src="/images/laptop.jfif"
                alt="ad"
                    />
                {basket?.length==0 ? (
                    <div>
                    <h2>yourr shopping basket is empty</h2>
                    </div>    
                ): (
                    <div>
                        <h2 className="checkout_title">your shopping basket</h2>
                        {/* list out all of the checkout product*/}
                        {basket?.map((item)=>(
                            
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            
                        )
                        
                        )}
                    </div>
                )} 
            </div> 
             {basket.length>0 &&(
                <div className="checkout_right">
                  
                     <Subtotal/> 
                </div>
             )} 
        </div>
        
    );
}

export default Checkout;
