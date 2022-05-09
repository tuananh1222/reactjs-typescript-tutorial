import React from 'react';
import './InputField.css'
const InputField = () => {
    return (
        <form  className='input'>
            <input type="text" aria-label='name' id="task-input" placeholder='Search..'/> 
            <button type='submit' id="task-btn"> Add</button>
        </form>
    );
};
export default InputField;