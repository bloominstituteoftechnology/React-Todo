import React from 'react'
import Todo from './Todo'
const TodoList = props => {
    return (
        <>
            {props.tasks.map((todo, index) => (
                <Todo
                    style="todo-item"
                    key={todo.id}
                    id={todo.id}
                    completed={todo.completed}
                    text={todo.task}
                    toggleTask={props.toggleTask}
                    tasks={props.tasks}
                    setTasks={props.setTasks}
                />
            ))}
        </>
    )
}

export default TodoList
