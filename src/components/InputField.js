import React from "react";

function InputField({type,  id , label }) {

    return (

        <label htmlFor={id}>
            {label}
            <input
                type={type}
                id={id}
            />
        </label>

    )

}

export default InputField;


