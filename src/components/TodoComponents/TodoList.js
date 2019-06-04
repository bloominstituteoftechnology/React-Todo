// your components will all go in this `component` directory.

import React from 'react';
import '../TodoComponents/Todo.css';
import Todo from '../TodoComponents/Todo'

const TodoList = props => {
    return (
        <div>
            {props.taskList.map((item, i) => (
                <div className="todo" key={i}>
                    <Todo 
                    item={item}
                    handleEventFinish={props.handleEventFinish} />
                </div>
            ))}
        </div>
    );
};

export default TodoList;