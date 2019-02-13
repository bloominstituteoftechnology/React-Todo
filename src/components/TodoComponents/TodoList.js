import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="todo-list">
            {props.todos.map(item => {
                return (
                    <Todo
                        task={item.task}
                        id={item.id}
                        key={item.id}
                    />
                )
            })}
        </div>
    );
}
export default TodoList;