// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import '../TodoComponents/Todo.css';
import Todo from '../TodoComponents/Todo.js';

const TodoList = props => {
    // console.log("props from TodoList", props);
    return (
        <div>
            {props.taskList.map((item, i) => (
                <div className="todo" key={i}>
                    <Todo 
                        item={item}
                        handleEventFinish={props.handleEventFinish} 
                    />
                </div>
            ))}
        </div>
    );
};

export default TodoList;

