import React from 'react';

const ListOfNames = (props) => {
  return (
    <ul>
      {props.nameList.map((name, index) => {
        return <li>{name}</li>
      })}
    </ul>
  )
};

export default ListOfNames;
