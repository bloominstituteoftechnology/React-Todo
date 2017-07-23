import React from 'react';

const ListOfToDoItems = (props) => {
  // // per https://facebook.github.io/react/docs/lists-and-keys.html#keys
  // const items = props.toDoList;
  // const listItems = items.map((item) =>
  //   <ListItem key={ item.toString() }
  //       value={ item }/>
  // );
  // return (
  //   <ul>
  //     { listItems }
  //   </ul>
  // );

  // const items = props.propsToDoList;
  // const items = props.toDoList;
  // const listItems = items.map((item) =>
  //   <li key={item.toString()}>
  //     {item}
  //   </li>
  // );
  // return (
  //   <ul>{ listItems }</ul>
  // );

  // return (
  //   <ul>
  //     { props.propsToDoList.map((name, index) => {
  //       return <li>{ name } at index { index }</li>
  //     }) }
  //   </ul>
  // )

  return (
    <ul>
      { props.toDoList.map((item, index) => {
        return <li>{ item }</li>
      }) }
    </ul>
  )

};

export default ListOfToDoItems;
