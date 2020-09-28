// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return(
        <div className="todo-list">
            {/* recieves the todos array and iterates over the list generating a new Todo for each element in the array */}
            {props.list.map((item) => (
                <Todo 
                    key={item.id}
                    todoItem={item}
                    toggleDone={props.toggleDone}
                />
            ))}
            {/* <button className="clearTodo-btn" onClick={props.clearTodo}>Clear Completed</button> */}
        </div>
    );
};

export default TodoList;