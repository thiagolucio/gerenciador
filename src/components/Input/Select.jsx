import React  from 'react';
import "./Input.css";

function Select({text, name, options, handleOnChange, value}) {
    
    return (
        <div className="form_group">
            {/* <label htmlFor={name}>{text}</label> */}
            <select 
            name={name} 
            id={name} 
            onChange={handleOnChange}
            value={value || []}
            multiple>
                <option classname="label_select">Selecione uma opção:</option>
                    {options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))}                
            </select>
        </div>
    );
}

export default Select;