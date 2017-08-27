import React, { Component } from 'react';

export default (props) => {
  return (
    <ul>
      {props.todos.map((todo, i) => {
        return <li onClick={props.onClick} key={i}>{todo}</li>;
      })}
    </ul>
  );
};