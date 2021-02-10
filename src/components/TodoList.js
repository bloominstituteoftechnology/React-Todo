// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
    return(
        <div className= "List">
                {props.todos.map(todo => {
                return <Todo key={todo.id} todo={todo} click={props.click} />
                })
                }
                <TodoForm 
                change={props.change} 
                newTodo={props.newTodo} 
                submit={props.submit} 
                delete={props.delete}
                />
        </div>
    )
}
export default TodoList;