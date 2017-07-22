import React from 'react';

const ListOfToDoItems = (props) => {
  const items = props.propsToDoList;
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
  //     { props.propsToDoList.map((name, index) => {
  //       return <li>{ name } at index { index }</li>
  //     }) }
  //   </ul>
  // )
}


export default ListOfToDoItems;
