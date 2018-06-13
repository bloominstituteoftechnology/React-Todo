import React from 'react';
import Todo from './Todo';
import './Todo.css'

const TodoList = (props) => {
    // console.log(props)
    return(
        <ul className="todo__item">
            {props.todoList.map((list, i) => {
                return <Todo onClick={props.onclick} key={list.id} todo={list.task} />
            })}
        </ul>
    )
}
// filter(list => (!list.completed))
export default TodoList;
