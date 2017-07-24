import React, { Component } from 'react';

export default (props) => {
  return (
    <ul>
      {props.todos.map((todo, i) => {
        return (
          <li key={i}>{todo}</li>
          )
      })}
    </ul>    
    )
}