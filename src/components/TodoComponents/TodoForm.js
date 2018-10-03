import React from 'react';

const TodoForm = ({props}) => {
    return (
        <form>
        <input
          onChange={props.changeHandler}
          type="text"
          name="inputTodo"
          value={props.value}
          placeholder="...todo"
        />
        <button onClick={props.handleNewTodo}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
}


export default TodoForm;