import React from 'react';
import Index from "./index.scss";


const TodoList = (props) => {

  return (<ul className="List-Items">{props.items.map((item, i) => (<li key={i}>{item} <button id={i} onClick={props.removeItem}>x</button></li>))}</ul>);

};

export default TodoList;