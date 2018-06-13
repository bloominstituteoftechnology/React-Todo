import React from 'react';
import Todo from './Todo';
import './Todo.css'

const TodoList = (props) => {
    // console.log(props.todoList)
    return(
        <ul className="todo__item">
            {props.todoList.filter(list => (!list.completed)).map((list, i) => {
                return <Todo  key={list.id} todo={list.task} />
            })}
        </ul>
    )
}

export default TodoList;
