import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="todo-list">
            {props.todos.map(item => {
                return (
                    <Todo
                        key={item.id}
                        task={item.task}
                        id={item.id}
                    />
                )
            })}
        </div>
    );
}
export default TodoList;