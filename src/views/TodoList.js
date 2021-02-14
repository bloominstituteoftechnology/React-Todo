import React from 'react';
import Todo from './Todo.js';
import './Todo.css';

const TodoList = props => {

    return(
        <div className="container">
            <h1> Todo List App </h1>
            
            <div className="form-container">

                {props.data.list.map((item) => 
                    <Todo key={item.id} checked={props.checked}  data={item}  />
                )}

                <form>
                    {console.log(props.data.list)}
                    <input placeholder='Todo Task' onChange={props.addTask} />
                    <button>Add Todo List</button>
                    <button>Clear Todo List</button>
                </form>
            </div>
        </div>
    )
}

export default TodoList;