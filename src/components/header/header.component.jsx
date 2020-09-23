import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";
import HomeIcon from "../home-icon/home-icon.component";

import "./header.styles.scss";

const Header = () => (
    <header className='header'>
        <Link className='header__logo' to='/'>
            <HomeIcon />
        </Link>
        <Link className='header__icon' to='/basket'>
            <CartIcon />
        </Link>
    </header>
);

export default Header;
