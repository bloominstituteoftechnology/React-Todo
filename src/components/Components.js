import React from 'react';

const TodoList = props => {
    return (
        <div>
            <h3 className="todoItem">{props.newTodo}</h3>
            {props.todoList.map((item, index) => (
                <div key={item + index}>{item}</div>
            ))}

        </div>
    );
};

export default Components;