import React from 'react';

const ListOfToDoItems = (props) => {
  // return (
  //   <ul>
  //     {props.toDoList.map((name, index) => {
  //       return <li>to do item: {name} ...is at index: {index}</li>
  //     })}
  //   </ul>
  // )

  // per https://facebook.github.io/react/docs/lists-and-keys.html#keys
  const items = props.toDoList;
  const listItems = items.map((item) =>
    <li key={item.toString()}>
      {item}
    </li>
  );
  return (
    <ul>{ listItems }</ul>
  );

};

export default ListOfToDoItems;
