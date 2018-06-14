//This components will take a props Todos Array, iterate over the list and generating new <Todo /> for each element in the array
import React from 'react';
import Todo from './Todo';
import './Todo.css';

function TodoList(props) {
    return (
        <div className="todo-list-wrapper">
          {props.todoList.map((todo, index) => {
            if (!todo.task.toLowerCase().includes(props.searchText.toLowerCase())) {
              return;
            }
            return <Todo onClick={() => props.clickToggle(index)} key={todo.id} todo={todo}/>
          })}
          
        </div>
    );
}

export default TodoList;