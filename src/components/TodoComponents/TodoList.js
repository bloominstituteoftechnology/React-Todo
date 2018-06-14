import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {

   const list = props.todos;

   return (
     
        <div className='list'> 
        {list.map((todo, index) => {
        return <Todo key = {todo.id} toggle = {props.toggle} todo = {todo} />
        

   })
}
</div>
   );
    }
export default TodoList;


        // <ul className='list' > {props.todos.map((todo, index) => {
        // return <li key = {todo['id']}> <input type = 'checkbox' key = {todo['id']}  onChange = {props.markComplete} checked = {todo['completed'].value} /> {todo['task']} </li>