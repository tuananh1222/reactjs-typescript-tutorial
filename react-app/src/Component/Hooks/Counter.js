import React, { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }
    useEffect(() =>{
        document.title = `You clicked ${count} times`;
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => handleClick()}>CLick me</button>
        </div>
    );
}

export default Counter;