import React, { Component } from 'react';

const ListOfToDoItems = (props) => {
  return (
    <ul>
      { props.propToDoList.map((name, index) => {
        return <li>{ name } at index { index }</li>
      }) }
    </ul>
  )
};


export default ListOfToDoItems;
