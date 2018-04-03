import React from 'react';

// const strike = () => {
//   return ({
//     'textDecoration': 'line-through'
//   })
// }

const lineThrough = (e) => {
  e.target.style.userSelect = 'none';
  e.target.style.textDecoration = (e.target.style.textDecoration === 'line-through') ? "none" : "line-through";
}

// const logThis = (e) => {
//   console.log(e.target.style);
// }

const Todo = props => {
  return (<div>
    {props.toDos.map((todo, index) => (<div onClick={lineThrough} key={index + todo}>{todo}</div>))}
  </div>)
};

export default Todo;
