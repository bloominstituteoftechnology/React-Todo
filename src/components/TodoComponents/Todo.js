import React from 'react';

const Todo = ({onClick, name, unique}) => <p data-id={unique} onClick={onClick} >{name}</p>;

export default Todo;