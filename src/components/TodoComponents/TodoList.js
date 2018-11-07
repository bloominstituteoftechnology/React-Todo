import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.itemList.map(item => (
                <Todo
                    key={item.id}
                    todoItem={item}
                />
            ))}
        </div>
    );
};


export default TodoList;