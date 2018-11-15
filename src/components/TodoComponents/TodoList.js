import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './Todo.css';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div className='todo-container'>
            <h1>Neverending List of Things</h1>
            {props.todoList.map(todo => (
                <div key={todo.id} className='todo' style={{backgroundColor: todo.backgroundColor}} onClick={() => props.strikeDone(todo.id)}>
                    <Todo completed={todo.completed} task={todo.task} /> 
                </div>
            ))}
            <TodoForm userInput={props.userInput} buttonPressed={props.buttonPressed} enterPressed={props.enterPressed} handleSubmit={props.handleSubmit} clearItem={props.clearItem}/>
        </div>
    );
};

export default TodoList;
