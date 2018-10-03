import React from 'react';

const TodoForm = props => {
    return(
        <form className="todoform">
          <input 
          type="text" 
          placeholder="todo" 
          name="newToDo"
          onChange={props.updateInput} 
          value={props.newToDo} />


        <button type="submit" 
        onClick={props.addNewTodo}>
        Add Todo
        </button>
        
        <button>Clear Completed</button>
        </form>
      );
    };
    

export default TodoForm;