import React from 'react';
import './Todo.css';

const Todo = (props) => {
	 // console.log(props);
	return(<div className='todoList'>
        {props.todos.map(todo => {
          return (
            <div className="items" key={todo.id}>
               {todo.task}
            </div>
          );
        })}
    </div>);
}

export default Todo;