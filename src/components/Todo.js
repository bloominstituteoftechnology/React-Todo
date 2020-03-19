import React from "react";

const Todo = props => {
  const { todo, style } = props;
  return (
    <div className="todo">
      {todo.map(list => {
        {
          console.log(style);
        }
        return (
          <p
            id={list.id}
            style={style}
            complete={props.complete}
            onClick={e => props.handleComplete(e)}
          >
            {list.input}
          </p>
        );
      })}
    </div>
  );
};

export default Todo;
