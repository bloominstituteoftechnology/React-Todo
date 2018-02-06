import React from 'react';

const StrikeThrough = (event) => {
  return console.log(event);
}

const List = (props) => {
  return (
    <ul>
      {props.items.map((element, index) => {
          return <li onClick={StrikeThrough} key={index}>{element}</li>
      })}
    </ul>
  );
};

export default List;
