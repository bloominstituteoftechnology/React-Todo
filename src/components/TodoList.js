// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    const handleClick = () => {
        props.handleItemCompleted();
    }


return (
    <div className ='Todo-list'>
        {props.toDo.map(item => (
            <Todo handleItemToggle ={props.handleItemToggle} key={item.id} 
            {...item} />
        ))}
        <button onClick ={handleClick} className ='clear-button'>
            Clear Todo</button>

    </div>
)
}

export default TodoList;