import React from 'react';

const ItemList = props => {
  console.log(props);
  return (
    <div>
        {props.items.map((item, index) => (
          <div key={item + index}>{item}</div>
          )
        )
      }
    </div>
  )
};

export default ItemList;
