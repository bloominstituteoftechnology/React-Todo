// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = (props) => {

    return (
        <div>
            {props.list.map(item => {
                return (
                    <div>
                    <Todo 
                        listItem={item.task}
                        key={item.key}
                        todo={item}
                        handleClear={props.handleClear}
                        todoClass={item.todoClass}    
                    />
                    </div>
                );
            })}
        </div>
    )
};

export default TodoList;
