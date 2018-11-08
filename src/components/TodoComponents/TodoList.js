import React from 'react';
import Todo from './Todo';
const TodoList = props => {
    return (
        <>
            {props.todoList.map((todo, index) => (
                <Todo
                    style="todo-item"
                    key={index}
                    id={todo.id}
                    completed={todo.completed}
                    text={todo.task}
                    completeTask={props.completeTask}
                />
            ))}
        </>
    );
};

export default TodoList;
