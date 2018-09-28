import React from 'react';

const TodoForm = (props) => {
  const filteredList = () =>{
      props.remove(props.completed)
  }
  return (
      <div className={props.displayStyle}>
        <input value={props.text} 
              placeholder="Enter a new To-Do"
              maxLength="42"
              onChange={props.input}
              onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                      props.add()
                  }
              }} 
        />
        <button onClick={props.add}>Add Todo</button>
        <button onClick={filteredList}>Clear Completed</button>
    </div>
    );
}

export default TodoForm;