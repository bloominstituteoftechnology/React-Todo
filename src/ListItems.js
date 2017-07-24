import React from 'react';

const ListItems = (props) => {
  return (
    <div className="DatList">
      <ul className="unordered">
        {props.list.map((name, index) => {
          let classes = (name.completed ? "checked" : "");
          return <div className="ListItems">
            <input onClick={() => {props.onCompleted(index)}} id="checkBox" type="checkbox"/><li className={classes}>{name.todo}</li>
                 </div>
        })}
      </ul>
    <button className="clear" onClick={props.onDelete}>Clear List</button>
    </div>
  );
};

export default ListItems;
