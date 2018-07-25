// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './components/TodoComponents/Todo'

const TodoList = props => {
    return(
       <div>
            {props.todo.map(task => <Todo todoProp = {task} />)}
       </div> 
    )    
}

export default TodoList;