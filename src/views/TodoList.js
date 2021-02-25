import './Todo.css';
import React from 'react';
import Todo from './Todo.js';
import Controls from './Controls.js'

const TodoList = props => {

    return(
        <div className="container">
            <h1> Todo List App </h1>
            
            <div className="form-container">
                {props.todoList.map(item => 
                    <Todo key={item.id} checked={props.checked}>
                        <p>{item.task}</p>
                        <input 
                            className="todoCheckBox" 
                            value={item.completed} 
                            type='checkbox' 
                            onClick={() => console.log('clicked', item.id)}
                            />
                    </Todo>
                )}
                <form>
                    <Controls checked={props.checked}/>
                </form>
            </div>
        </div>
    )
}

export default TodoList; 