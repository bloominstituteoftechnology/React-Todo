import React from 'react';

const ToDoForm = props => {
    return (
        <div>
          <form onSubmit={props.addNewToDo}>
          <input
            type="text"
            name="newToDo"
            onChange={props.changeHandler}
            value={props.newToDo}
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
