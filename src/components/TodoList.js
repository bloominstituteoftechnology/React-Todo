// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
// import TodoForm from './TodoForm'
import Todo from './Todo'
import TodoForm from './TodoForm'


const TodoList  = props => {
    
    return(
        <div className="todo-list">
            {props.todos.map(todo => (
                <Todo toggleList={props.toggleList} key={todo.id} todo={todo} />
               
            ))}
           
        </div>
    )
};
export default TodoList;