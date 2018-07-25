import React from 'react';


const TodoForm = props => {
  return (
    <div>
      <form action="submit" onSubmit={props.addMe}>
        <input type="text" placeholder="submit" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;