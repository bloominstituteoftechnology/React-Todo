import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.things.map(todo => {
                return (
                    <Todo 
                        todo={todo}
                        toggleTodo={props.toggleTodo}
                    />
                )
            })}
        </div>
    );
};

export default TodoList;

