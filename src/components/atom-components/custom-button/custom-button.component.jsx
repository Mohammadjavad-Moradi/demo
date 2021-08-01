import React from 'react';

import { Link } from 'react-router-dom';
import { StyledButton } from './custom-button.styles';



export default function CustomButton ({variant, children, component, to, handleClick, size}) {
    return (
        component ?
        <StyledButton variant={variant} size={size} component={Link} to={to} >
            {children}
        </StyledButton>
        : 
        <StyledButton variant={variant} size={size} onClick={() => handleClick()}>
            {children}
        </StyledButton>
    );
}
