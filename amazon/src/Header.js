//no 4

import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import {Link} from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"; 
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header() {
    // from reducer basket value is taken
    const [{ basket,user },dispatch]=useStateValue();
    
    
    const login=()=>{
        if (user) {
            auth.signOut();
        }
    }; 
    return (
        <nav className="header" >
                <Link to="/">
                <img className="header_login__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazonlogo"/>
                </Link>

            <div className="header__search">
                <input type="text" className="Header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email} </span>
                        <span className="header__optionLineTwo"> {user? "Sign out":"Sign in"} </span>
                    </div>
                </Link>
            
                <Link to="/" className="header_link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Order</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                            <span className="header__optionLineTwo header_BasketCount">
                                {basket?.length}
                            </span>
                    </div>
                </Link>
            
            </div> 
        </nav>
    );
}

export default Header;
