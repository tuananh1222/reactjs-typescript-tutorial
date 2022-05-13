import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

function Search(props) {
    const {onSubmit} = props;
    const [searchItem, setSearchItem] = useState('');
    const typingTimRef = useRef('null');
    function handleInputChange(e){
        const value =  e.target.value;
        setSearchItem(value)    
        if(!onSubmit) return;
        if(typingTimRef.current){
            clearTimeout(typingTimRef.current);
        }
        typingTimRef.current = setTimeout(() =>{         
            const formValue ={
                searchItem: value,
            };
            onSubmit(formValue);
        }, 500);  
           
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

