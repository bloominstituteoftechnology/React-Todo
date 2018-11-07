import React from 'react';

import Todo from './Todo';

const TodoList = ({list}) => {

  return (

    <ul>

      {list.map(item => <Todo item={item} />)}

    </ul>

  );

}

export default TodoList;
