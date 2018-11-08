import React from 'react';

import './Todo.scss';

const Todo = ({item, clickHandler}) => {

  return (

    <li onClick={() => clickHandler(item.id)} className={item.completed ? 'completed' : null}><input type='checkbox' onChange={() => {}} checked={item.completed} /> {item.task} <p></p></li>

  );

}

export default Todo;
