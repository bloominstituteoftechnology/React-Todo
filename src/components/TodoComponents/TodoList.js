import React from 'react';
import Todo from './Todo';


function TodoList(props) {
  
        return (  
            <ul className='tdl'> 
            {props.todos.map(task => (<Todo  propsTodo={task} key={todo.id}  />))}
                </ul>
        );
    
}
 
export default TodoList;