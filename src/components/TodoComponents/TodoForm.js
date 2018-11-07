import React from 'react';

const TodoForm = ({btnHandler, entryHandler, formInput, searchInput}) => {

  return (

    <>

      <form>

        <input type="text" name="formInput" placeholder="Add task" onChange={entryHandler} value={formInput} />
        <button name="submitButton" onClick={btnHandler}>Add Todo</button>
        <button name="clearButton" onClick={btnHandler}>Clear Todos</button>

      </form>

      <form onSubmit={e => e.preventDefault()}>

        <input type="text" placeholder="Filter" name="searchInput" onChange={entryHandler} value={searchInput} />

      </form>

    </>

  );

}

export default TodoForm;
