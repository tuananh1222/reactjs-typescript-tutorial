import React from 'react'
import PropsType from 'prop-types'
TodoList.prototype ={
    todos: PropsType.array,
    onTodoClick: PropsType.func
}
TodoList.defautProps={
    todos:[],
    onTodoClick: null
}
function TodoList(props) {
    const {todos, onTodoClick} = props;
    function handClick(todo){
        if(onTodoClick){
            onTodoClick(todo);
        }
    }
    return (
        <div>
            <ul>
                {todos.map((list, index) =>(
                    <li
                        key={list.id}  
                        onClick={() => handClick(list)}
                    >
                        {list.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList