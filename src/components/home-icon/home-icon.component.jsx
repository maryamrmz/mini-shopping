import React from "react";
import { ReactComponent as RootIcon } from "../../assets/root.svg";

import "./home-icon.styles.scss";

const HomeIcon = () => (
    <div className='logo-icon'>
        <RootIcon className='home-icon' />
    </div>
);

export default HomeIcon;
