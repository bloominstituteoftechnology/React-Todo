import React from 'react';

import Todo from './Todo';

const TodoList = ({list}) => {

  return (

    <ul>

      <Todo item={list[0]} />

    </ul>

  );

}

export default TodoList;
