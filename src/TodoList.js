import React from "react";

let TodoList = props => {
      var printArray = [];
      for (var keys in props.tasks){
        printArray.push(<div key={Math.random()}>{props.tasks[keys].task}</div>)
      }
      return printArray;
}

export default TodoList;
