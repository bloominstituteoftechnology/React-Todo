import React from 'react';

const TodoList = (props) => {
    return (
        <ul>
            {props.items.map(item => (
                <li key={item.id}>{item.id + '. ' + item.value}</li>
            ))}
        </ul>
    );
}
export default TodoList;
