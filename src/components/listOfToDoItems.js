import React, { Component } from 'react';

const ListOfToDoItems = (props) => {
  const items = props.propToDoList;
  const listItems = items.map((item) =>
    <li key={item.toString()}>
      {item}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
  // return (
  //   <ul>
  //     { props.propToDoList.map((name, index) => {
  //       return <li>{ name } at index { index }</li>
  //     }) }
  //   </ul>
  // )
}


export default ListOfToDoItems;
