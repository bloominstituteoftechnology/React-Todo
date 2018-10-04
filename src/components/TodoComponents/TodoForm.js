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

        <div>
        <button type="submit" onClick={props.addNewTodo}>Add New Todo</button>
        <button>Clear Completed</button>
        </div> 
              
      </form>    
  )
}


export default TodoForm