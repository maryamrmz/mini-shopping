import React from "react";

import "./CustomButtom.scss";

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
