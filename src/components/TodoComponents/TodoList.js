// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
<<<<<<< HEAD
=======
// import React from 'react';

// import Todo from './Todo';

// const MyArr = [];

// const TodoList = props => {
//     return (
//     //    {MyArr:map(item => <div>{item.something}</div>)}
//         {myArr.map(task => <TodoList name={task.completed}/>)}


            
        
//     );
// };

// export default TodoList;

>>>>>>> 258e6ea64b01e875e236a22c1b862e9cdc37baa7
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

  return (
    <div>
      {props.taskList.map((eachTask, i) => {
        return <Todo key={i} todo={eachTask.task} />
      })}
    </div>
  );
};

export default TodoList;
