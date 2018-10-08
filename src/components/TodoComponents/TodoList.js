import React from 'react';
import './Todo.css';

const TodoList = (props) => {
    return (
        <div className="todolist">
            {props.todoList.map(item => {
                return (
                    <div key={item.id} className="listItem">
                        <p onClick={props.itemStrike}>
                            {item.task}
                        </p>
                    </div>

                ); 
            })}
        </div>
    )
}

export default TodoList;
