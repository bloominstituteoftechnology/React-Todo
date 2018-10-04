// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import Form from './TodoForm';

let TodoList = props => {
    return (

        <div>
            <nav>
                <a href="index.html">ToDo App</a>
                <input type="text" placeholder="Search (not functional)" value={props.value} name='searchText' onChange={props.searchHandler} />
            </nav>
            <h1>What do you need to do today?</h1>
            <Form changeHandler={props.changeHandler} addTodo={props.addTodo} clearTodos={props.clearTodos}/>
            <ul>
                {props.todos.map(todo => <Todo todo={todo} completeTask={props.completeTask} />)}
            </ul>
        </div>
    )
} 

export default TodoList;