import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form>
        <input type="text" 
        placeholder="What to do?" 
        value={props.todo} 
        onChange={props.onChange}
        />

        <button className="add-button" onClick={addTodo}>Add Todo</button>
        <button className="clear-button">Clear Todos</button>
      </form>
    </div>
  );
};

export default TodoForm;