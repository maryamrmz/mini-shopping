import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";

const Header = () => (
    <div className='header'>
        <Link className='logo' to='/'>
            Home
        </Link>
        <div className='icon'>
            <CartIcon />
        </div>
    </div>
);

export default Header;
