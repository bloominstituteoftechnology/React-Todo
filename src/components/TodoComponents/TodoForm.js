import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.onSubmit}>

    <input
    type = 'text'
    placeholder = 'add a todo'
    value={props.input}
    onChange = {props.onChange}
    />
    <input 
    type = 'Submit'
    value ='Add Todo' 
    />
    <input type='button'
    value ="Clear"
    />
</form>
  );
};

export default TodoForm;
