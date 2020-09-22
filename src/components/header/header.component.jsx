import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";
import HomeIcon from "../home-icon/home-icon.component";

import "./header.styles.scss";

const Header = () => (
    <div className='header'>
        <Link className='logo' to='/'>
            <HomeIcon />
        </Link>
        <Link className='logo' to='/basket'>
            <CartIcon />
        </Link>
    </div>
);

export default Header;
