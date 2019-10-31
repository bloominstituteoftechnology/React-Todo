// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Chore from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.chores.map(chore => (
        <Chore
          key={chore.id}
          chore={chore}
          toggleFinished={props.toggleFinished}
        />
      ))}
      <button className="clear-btn" onClick={props.clearChore}>
        Clear Chore List
      </button>
    </div>
  );
};

export default TodoList;
