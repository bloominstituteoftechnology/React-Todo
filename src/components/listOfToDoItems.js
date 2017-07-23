import React from 'react';

const ListOfToDoItems = (props) => {
  const styles = {
    listStyleType: 'none',
  };

  // // This style works, but it raises an error in the Chrome Dev Tools
  // return (
  //   <ul style={styles}>
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
    <ul style={styles}>
      { listItems }
    </ul>
  );

};

export default ListOfToDoItems;
