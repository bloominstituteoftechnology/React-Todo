import React from 'react';

const TodoForm = ({btnHandler, entryHandler, formInput}) => {

  return (

    <form>

      <input type="text" name="formInput" onChange={entryHandler} value={formInput} />
      <button name="submit" onClick={btnHandler}>Add Todo</button>
      <button name="clear" onClick={btnHandler}>Clear Todos</button>

    </form>

  );

}

export default TodoForm;
