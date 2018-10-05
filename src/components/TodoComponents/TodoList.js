import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div className="todo-list">
        {props.todos.map(item => (
          <Todo //removed an unnecessary return: THIS IS WHAT WAS CAUSING THERE TO BE A SECOND ITEM IN REACT DEV
                toggleCompleted={props.toggleCompleted}
                key={item.id} //THISSSSS?
                // id={item.id} //do i need this? it's functioning without it
                item={item} ////changed task to item which affects Todo.js
                />
        ))}
        </div>
    );
}
                            
export default TodoList;


