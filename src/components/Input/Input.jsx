import React  from 'react';
import "./Input.css";

function Input({type, name, text, placeholder, handleOnChange, value}) {
    return (
        <div className="form_group">
            <input 
                type={type} 
                name={name} 
                id={name}
                placeholder={placeholder} 
                value={value}
                onChange={handleOnChange}
                text={text}
                />
        </div>
    )
}

export default Input;