// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import "./Todo.css";

const TodoList = (props) => {
    return (
        <div className='myTodoListDiv'>
            { props.array.map(e => <Todo key={ e.id } onClick={ props.onClick } item={ e } />) }
        </div>
    );
}

export default TodoList;