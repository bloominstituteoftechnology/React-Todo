import React from "react";

const List = props => {
  // This is "Reading" State
  return (
    <div>
      {props.list.map((listitem, index) => (
        <div onClick={props.method} key={listitem + index}>{listitem}</div>
      ))}
    </div>
  );
};

export default List;
