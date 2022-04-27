import React  from 'react';
import "./Input.css";

function TextArea({type, name, text, placeholder, handleOnChange, value, rows, cols}) {
    return (
        <div className="form_group">
            <textarea 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value}
                id={name}
                rows={rows} 
                cols={cols}
                onChange={handleOnChange}
                text={text}
                />
        </div>
    )
}

export default TextArea;