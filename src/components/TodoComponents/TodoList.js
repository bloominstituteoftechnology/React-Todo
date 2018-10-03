import React from "react"

const TodoList = props => {

    return (
      <div>
        {props.taskLists.map(x => {
          return <div key={x.id}>{x.task}</div>;
        })}
      </div>
    );
  }


export default TodoList