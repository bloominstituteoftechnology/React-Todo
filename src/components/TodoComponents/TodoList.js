import React from 'react';

import Todo from './Todo';

import './Todo.scss';

const TodoList = ({list}) => {

  return (

    <ul>

      {list.map(item => <Todo key={item.id} item={item} />)}

    </ul>

  );

}

export default TodoList;
