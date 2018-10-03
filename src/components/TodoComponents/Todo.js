import React from "react";

// class Todo extends React.Component {
//   constructor(props) {
//     super(props);

//   }


      // {/* className={props.todo.completed} */}
const Todo = props => {
  return (
    <div className="todo"
    onClick={props.toggleCompleted}
    id={props.todo.id}
    >
      <p>
      {props.todo.task}
      </p>
    </div>
  );
};

export default Todo;
