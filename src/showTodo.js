import React, { Component } from 'react';

const ShowTodo = (props) => {
  return (
    <div>
      <center>
      <h1>Todo List</h1>
        <hr />
        <ul>
          {
            props.items.map((item, index) => <li key={index}> {item} </li>)
          }
        </ul>
      </center>
    </div>
  )
};

export default ShowTodo;
