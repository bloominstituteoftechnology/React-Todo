import React from 'react'; 

const TodoForm = (props) => {
    return (
      <form onSubmit={props.onSubmitButton} className="toDoForm">
        <input className="toDoInput" type="text" placeholder="Add todo" onChange={props.onChange} />
        <div className="buttons">
            <button className="add" onClick={props.onSubmitButton}>Add</button>
            <button className="clear" onClick={props.onClear}>Clear</button>
        </div>

      </form>
    );
  }
  export default TodoForm;