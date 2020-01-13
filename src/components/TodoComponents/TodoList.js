// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
//import Item from './Todo';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = props => {

    return (
        <div>
        {props.todo.map(item => (
            <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
        <TodoForm AddTodo={props.AddTodo} />
        </div>
    );
};

export default TodoList;