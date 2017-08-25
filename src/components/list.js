/*eslint no-unused-vars: "off"*/
import React from 'react';

// CSS
const ul_css = {
  listStyle: 'none',
  fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  fontSize: '14px',
  lineHeight: '2em',
  color: '#4d4d4d',
  margin: 0,
  paddingLeft: 10,
  paddingBottom: 20
};
const li_css = {
  borderBottom: 'thin dotted #ddd'
};

// Functional Component
const List = props => {
  // Map ToDoList array elements to <li>'s
  const items = props.toDoList;
  const listItems = items.map(item =>
    <li style={li_css} key={item.toString()} onClick={() => this.onClick(item)}>
      {item}
    </li>
  );
  return (
    <ul style={ul_css}>
      {listItems}
    </ul>
  );
};

export default List;
