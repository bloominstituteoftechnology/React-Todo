import React from 'react';

const List = (props) => {
  return (
    <div>
      {props.items.map((element,index) => {
        return <div key={index}>{element}</div>
      })}
    </div>
  );
};

export default List;