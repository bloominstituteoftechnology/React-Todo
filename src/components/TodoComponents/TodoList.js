import React from 'react';
import Todo from './Todo';


function TodoList(props) {
  
        return (  
            <ul className='tdl'> 
            {props.todos.map(task => (<Todo  propsTodo={task} key={task.id} toggleCompleted={props.toggleCompleted} />))}
                </ul>
        );
    
}
 
export default TodoList;