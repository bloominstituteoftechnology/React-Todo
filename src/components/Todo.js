import React from "react";

const Todo = (props) => {
   return (
      <div>
         {props.tasks.map((i) => (
            <p key={i.id} onClick={() => props.toggleComplete(i)}>
               {i.task}
            </p>
         ))}
      </div>
   );
};

export default Todo;
