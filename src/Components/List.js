import React from 'react';

// const StrikeThrough = (event) => {
  
// }

// onClick={StrikeThrough}

const List = (props) => {
  return (
    <div>
      {props.items.map((element, index) => {
          return <div key={index}>{element}</div>
        // return <div onClick={toggleStrike} key={index}>{element}</div>
      })}
    </div>
  );
};

export default List;
