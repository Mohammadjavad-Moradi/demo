import React from 'react';

const FormInput = ({label, handleChange, ...otherProps}) => (
    <div>
        <input onChange={handleChange} {...otherProps} />
        {
            label ? 
            (
                <label>{label}</label>
            )
            : null
        }
    </div>
);

export default FormInput;