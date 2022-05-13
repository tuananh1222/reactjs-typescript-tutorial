import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    const {onSubmit} = props;
    const [searchItem, setSearchItem] = useState('');
    function handleInputChange(e){        
        setSearchItem(e.target.value)    
         if(!onSubmit) return;
        const formValue ={
            searchItem,
        };
        onSubmit(formValue);    
    }   
  return (
    <form>
        <input type='text' value={searchItem} onChange={handleInputChange}></input>
    </form>
  )
}

Search.propTypes = {
    onSubmit: PropTypes.func
}
Search.defaultProps ={
    onSubmit: null
}
export default Search

