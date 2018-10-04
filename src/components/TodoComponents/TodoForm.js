import React from 'react';
//<form onSubmit={(event)=>{this.methodName(event)}}>
const ToDoForm = props => {
    return (
        <div>
          <form onSubmit={props.addNewToDo}> 
          <input
            type="text"
            name="newToDo"
            value={props.newToDo}
            onChange={props.changeHandler}
          />
          <button type="submit" onClick={props.addNewToDo}>
            Add Item
          </button>
          <button>
          Clear Completed
          </button>
        </form>
      </div>
    );
  };

  export default ToDoForm;
