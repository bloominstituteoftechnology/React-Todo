import React from 'react';

export default function ToDoItem (props) {
    return (
        <div><p>{props.item.task}</p></div>
    );
}