import React, { Component } from 'react';

const ListOfToDoItems = (props) => {
  return (
    <ul>
      { props.toDoList.map((name, index) => {
        return <li>{ name }</li>
      }) }
    </ul>
  )
};


export default ListOfToDoItems;
