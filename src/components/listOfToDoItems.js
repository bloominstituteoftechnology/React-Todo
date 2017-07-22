import React, { Component } from 'react';

const ListOfToDoItems = (props) => {
  const items = props.propToDoList;
  const listItems = items.map((item) =>
    <li key={item.toString()}>
      {item}
    </li>
  );
  // return (
  //   <ul>
  //     { props.propToDoList.map((name, index) => {
  //       return <li>{ name } at index { index }</li>
  //     }) }
  //   </ul>
  // )
  return (
    <ul>{listItems}</ul>
  );
}


export default ListOfToDoItems;
