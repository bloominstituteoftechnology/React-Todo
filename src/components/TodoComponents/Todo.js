import React from "react";

// class Todo extends React.Component {
//   constructor(props) {
//     super(props);

//   }


      // {/* className={props.todo.completed} */}
const Todo = props => {
  return (
    <div>
      <p>
      {props.todo.task}
      </p>
    </div>
  );
};

export default Todo;
