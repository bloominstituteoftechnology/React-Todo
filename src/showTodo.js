import React, { Component } from 'react';

const ShowTodo = (props) => {
  <ul>
    {
      props.items.map((item, index) => <li key={index}> {item} </li>)
    }
  </ul>
};

export default ShowTodo;
