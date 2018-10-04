import React from 'react';
import './Todo.css';

const TodoForm = props => { 
    return (
        <div>
            <form onSubmit={props.addTodoInput}>
                <input type="text" name="newTask" placeholder="...Get mvp done" onChange ={props.inputChange} value={props.newTask}></input>
                <button className= "todoButton1" type="submit" onClick={props.addTodoInput}>Add Todo</button>
                <button className= "todoButton2" onClick={props.completeTaskWipe}>Clear Completed</button>
            </form>
            <form>
                <input type="text" placeholder="...filter this!" onChange ={props.inputChangeFilter}></input>
                <button className= "filterButton" type="submit" onClick={props.addTodoInput}>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;