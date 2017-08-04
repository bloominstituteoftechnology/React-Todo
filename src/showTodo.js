import React, { Component } from 'react';
import TodoListMain from './todoListMain'

const ShowTodo = (props) => {
  return (
    <div>
      <center>
      <h1>Todo List</h1>
        <hr />
        <ul>
          {
            props.items.map((item, index) =>
            <div className="list" key={index}>
              <li onClick={props.handleDelete} key={index}> {item} </li>
            </div>)
          }
        </ul>
      </center>
    </div>
  )
};

export default ShowTodo;
