import React from 'react';

const TodoForm = props => {
    return(
        <form className="todoform">
          <input 
          type="text" 
          placeholder="enter to do" 
          name="newToDo"
          onChange={props.updateInput} 
          value={props.newToDo} />


        <button 
        className="submit"
        type="submit" 
        onClick={props.addNewTodo}>
        Add

        </button>
      
        
        <button
        className="clear"
        onClick={props.complete}>
        Clear Completed</button>
        </form>
      );
    };
    

export default TodoForm;