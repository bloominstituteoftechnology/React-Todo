// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    console.log('TodoList.js props',props)
    return(
        <div>
            {props.tasks.map(task => (
              <Todo {...task} key={task.id} />
            ))}
            
        </div>
    );
}
export default TodoList;