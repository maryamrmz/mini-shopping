import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../CartIcon";
import { ReactComponent as RootIcon } from "../../assets/root.svg";

import "./Header.scss";

const Header = () => (
    <header className='header'>
        <Link className='header__logo' to='/'>
            <div className='header__logo-icon'>
                <RootIcon className='home-icon' />
            </div>
        </Link>
        <Link className='header__icon' to='/basket'>
            <CartIcon />
        </Link>
    </header>
);

export default Header;
