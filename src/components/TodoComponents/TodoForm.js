import React from 'react';

const TodoForm = ({submitHandler, inputText}) => {

  return (

    <form onSubmit={submitHandler}>

      <input type="text" name="formInput" value={inputText} />
      <button type="submit" name="submit">Add Todo</button>
      <button name="clear">Clear Todos</button>

    </form>

  );

}

export default TodoForm;
