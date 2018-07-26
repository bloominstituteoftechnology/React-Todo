import React from 'react';
import './Todo.css';


const TodoForm = props => {
  return(
    <form>
        <input placeholder="Input Value" onChange={props.handleTask} />

        <button onClick={props.handleAddTodo}>Add Todo</button>

        <button onClick={props.handleCompleted}>Clear Completed</button>

    </form>
  );

};

export default TodoForm;
