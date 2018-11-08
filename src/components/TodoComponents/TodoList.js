import React from 'react';

import Todo from './Todo';

import './Todo.scss';

const TodoList = ({list, clickHandler}) => {

  return (

    <ul>

      {list.map(item => <Todo key={item.id} item={item} clickHandler={clickHandler} />)}

    </ul>

  );

}

export default TodoList;
