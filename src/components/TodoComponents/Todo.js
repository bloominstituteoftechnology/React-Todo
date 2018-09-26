import React from 'react';
import './Todo.css';

const Todo = (props) => {
	 console.log(props);
	return(<div>
        {props.todos.map(todo => {
          return (
            <div>
               {todo.task}
            </div>
          );
        })}
    </div>);
}

export default Todo;