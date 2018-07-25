import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
   <div>
       <input placeholder="Todo..." />
       <button>Add Todo</button>
       <button>Clear</button>
       </div>

    );
};


export default TodoForm;