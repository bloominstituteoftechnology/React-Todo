import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  let test = JSON.parse(localStorage.getItem("tasks"));
  // const date = localStorage.getItem("tasksDate");
  // const tasksDate = date && new Date(parseInt(date));
  // const now = new Date();
  // const taskAge = Math.round((now - tasksDate) / (1000 * 60));
  // const procratinating = taskAge >= 1;
  // if (procratinating) {
  //   console.log("GET IT DONE");
  //   // this.isProcrastinating = true;
  // }
  // console.log(now);
  // console.log(tasksDate);
  // console.log(taskAge);
  // console.log(test);
  return (
    <div>
      {test &&
        test.map(item => {
          // const date = localStorage.getItem("tasksDate");
          // const tasksDate = date && new Date(parseInt(date));
          // const now = new Date();
          // const taskAge = Math.round((now - tasksDate) / (1000 * 60));
          // const procratinating = taskAge >= 1;
          // if (procratinating) {
          //   console.log("GET IT DONE");
          //   item.isProcrastinating = true;
          // }
          // console.log(item.isProcrastinating);
          return (
            <Todo
              key={item.id}
              item={item}
              toggleComplete={props.toggleComplete}
            />
          );
        })}
      <button className="clear-button" onClick={props.clearComplete}>
        Make Room
      </button>
    </div>
  );
};

export default TodoList;
