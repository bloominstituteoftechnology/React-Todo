import React from 'react';

import './Todo.css';

const TodoList = props => {
   return (
     
        <ul className='list' > {props.todos.map((todo, index) => {
        return <li key = {todo['id']}> <input type = 'checkbox' key = {todo['id']}  onChange = {props.markComplete} checked = {todo['completed'].value} /> {todo['task']} </li>

   })
}
</ul>
   );
    }
export default TodoList;