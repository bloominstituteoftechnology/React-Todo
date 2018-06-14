// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo'

const TodoList = (props) => {  //receives array, iterates over array, generates new 'Todo' for each.
    console.log(props);
    return (
        <div className='todo-list'>
        {props.todolist.map((todo) => {
            return (
            <Todo 
            key={Math.random()} 
            todo={todo.task} />
            );  
        })}
    </div>
)
}

export default TodoList;

//className= { props.state.condition ? "completed" : "todo-item" }
//return <Todo key=(Math.random()) task={todo}
/* <div className='todo-list'>
           {props.todolist.map((task) => {
               return <Todo key={Math.random()} task={dataInput} />*/