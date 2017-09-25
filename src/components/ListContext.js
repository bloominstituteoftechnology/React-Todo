// React from react.
import React from 'react';
// Font Awesome
const FontAwesome = require('react-fontawesome');

const ListContext = (props) => {
  return (
    <header>
      <FontAwesome className='list-icon' name={props.listIcon} size='lg' />
      <h1>{props.listName}</h1>
      <FontAwesome className='edit-icon' name='pencil' onClick={props.editList_eventHandler} />
    </header>
  );
};

export default ListContext
