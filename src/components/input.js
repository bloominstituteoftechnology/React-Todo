import React from 'react';

const Input = (props) => {
  return (
    <div>
      <input
        className={props.style}
        type="text"
        name="listItem"
        value={props.listItem}
        placeholder="add item to list"
        onChange={props.method}
      />
    </div>
  );
}
export default Input;
