import React from 'react';
import './Todo.css';

const Todo = props => {
   return(
    <form>
    <h2>{props.task}</h2>
    </form>
    );
};

export default Todo;