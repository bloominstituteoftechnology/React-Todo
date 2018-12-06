import React from 'react';

export const AddButton = props => {
  return (
    <button className="add" onClick={props.update}>
      Add To List
    </button>
  );
};

export const ClearCompleted = props => {
  return (
    <button className="clear" onClick={props.clear}>
      Clear Completed Items
    </button>
  );
};

export const Input = props => {
  return <input placeholder={props.placeholder} onChange={props.input} />;
};
