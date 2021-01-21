import React from 'react';



const Todo = (props) => {
    // console.log('props', props.item.completed)
    
    const handleClick = () => {
        // console.log('clicked',props.item);
        props.toggleCompleted(props.item.id);
        //!This will reach the id from the todo list. item is coming from map(item =>(<Todo item={item} />)) File: TodoList.js
        
    }

return(
    <div onClick={handleClick}  className={`item${props.item.completed ? ' completed': ''}`}>
        <p>{props.item.task}</p>
    </div>
    )
}

export default Todo;