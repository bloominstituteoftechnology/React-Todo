import React from 'react';

import './Todo.scss';

const TodoForm = ({btnHandler, entryHandler, formInput, searchInput}) => {

  return (

    <div className='form'>

      <form>

        <input type="text" name="formInput" placeholder="Add task" onChange={entryHandler} value={formInput} />
        <button name="submitButton" onClick={btnHandler}>Add Todo</button>
        <button name="clearButton" onClick={btnHandler}>Clear Todos</button>

      </form>

      <form onSubmit={e => e.preventDefault()}>

        <input type="text" placeholder="Filter" name="searchInput" onChange={entryHandler} value={searchInput} />

      </form>

    </div>

  );

}

export default TodoForm;
