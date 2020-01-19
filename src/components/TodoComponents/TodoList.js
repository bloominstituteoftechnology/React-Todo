// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'
import { Button } from 'reactstrap';

 const TodoList = props =>{
     return (
         <div>
             {props.tasks.map(task => (
             <Todo
                key={task.id}
                task={task}
                toggleDone={props.toggleDone}
             />
            ))}
             <Button onClick={props.clearTask}>DONE</Button>
         </div>
     );
 };
 export default TodoList;