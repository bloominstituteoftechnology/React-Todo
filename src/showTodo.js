import React, { Component } from 'react';

const ShowTodo = (props) => {
  return (
    <ul>
      {
        props.items.map((item, index) => <li key={index}> {item} </li>)
      }
    </ul>
  )
};

export default ShowTodo;
