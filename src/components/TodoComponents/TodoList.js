// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
import React from 'react';
import './Todo.css'

function TodoList(props) {

    return (
        <div>
            {props.todoArr.map((item, index) => {
            return <div className={item.completed ? 'struckThru' : 'undone' } onClick={() => props.mark(props.todoArr, item.id)}>{item.task}</div>;    
            })}
        </div>
    );
}

export default TodoList;


