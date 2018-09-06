import React, { Component } from 'react';
import TodoList from './TodoList'

function Todo(props) {
  
        return ( 
            <li className='td'>
                {props.task}
            </li>
         );
    
}
 
export default Todo ;
