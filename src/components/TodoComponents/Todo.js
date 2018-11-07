import React from 'react';

import './Todo.scss';

const Todo = ({item}) => {

  return (

    <li>{item.task}</li>

  );

}

export default Todo;
