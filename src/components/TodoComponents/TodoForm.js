import React from 'react';

const TodoForm = (props) => {
  return (
    <form>
      <input 
        type="text"
        name="newTodo"
        placeholder="add todo item"
        onChange={props.changeHandler}
        value={props.newTodo} //taken from this.state
        />
        <button type="submit" onClick={props.addNewTodo}>Add New Todo</button>
        <button>Clear Completed (for day 2)</button>        
    </form>
  )
}


export default TodoForm