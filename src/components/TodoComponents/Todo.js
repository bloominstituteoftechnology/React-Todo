import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log("props.task", props);
   return (
<div>
   {props.task}
</div>
   );
};

export default Todo;