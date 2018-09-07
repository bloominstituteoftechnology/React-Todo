import React from 'react';
import Todo from './Todo';


function TodoList(props) {
  
        return (  
            <ul className='tdl'> 
            {props.todos.map(todo => <Todo propsTodo={todo}  />)}
                </ul>
        );
    
}
 
export default TodoList;