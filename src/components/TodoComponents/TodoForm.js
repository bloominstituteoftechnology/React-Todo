import React from 'react';

const TodoForm = () => {

  return (

    <form>

      <input type="text" name="formInput" value="" />
      <button type="submit" name="submit">Add Todo</button>
      <button name="clear">Clear Todos</button>

    </form>

  );

}

export default TodoForm;
