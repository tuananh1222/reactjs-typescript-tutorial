import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TodoForm(props) {
    const{onTodoSubmit} =(props)
    const [value, setValue] = useState('');
    function handleValueChange(e){      
        setValue(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!onTodoSubmit) return;

        const formValue={
            title:  value
        }
        onTodoSubmit(formValue);
    }
  return (
    <form  onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleValueChange}></input>
    </form>
  )
}

TodoForm.propTypes = {
    onTodoSubmit: PropTypes.func
}
TodoForm.defautProps ={
    onTodoSubmit: null
}
export default TodoForm

