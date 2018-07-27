import React from 'react';
// import './components/TodoComponents/Todo.css'

const TodoForm = props => {
    return (
   <div>
       <input id="Input" placeholder="Todo..." />
       <button onClick={props.add}>Add Todo</button>
       <button onClick={props.clear}>Clear</button>
       </div>

    );
};


export default TodoForm;