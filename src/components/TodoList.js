// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from '../components/Todo'

const TodoList = props => {
   const handleClick = () => {
        props.handleClearItems();
    }


    return(
        <div className="todo-list">
            {props.actualList.map(item => (
                <Todo handleToggleItem={props.handleToggleItem} item={item}/>
            ))}
            <button onClick={handleClick} className="clear-btn">Remove Finished</button>
        </div>
    )
}

export default TodoList