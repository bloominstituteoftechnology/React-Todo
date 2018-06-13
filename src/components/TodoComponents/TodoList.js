//This components will take a props Todos Array, iterate over the list and generating new <Todo /> for each element in the array
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="todo-list-wrapper">
          {props.todoList.map((todo, index) => {
            return <Todo key={todo.id} todo={todo}/>
          })}
        </div>
    );
}

export default TodoList;