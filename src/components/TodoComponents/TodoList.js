// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

 const TodoList = props =>{
     return (
         <div>
             <h3>TO DO LIST</h3>
             <Todo/>
         </div>
     )
 }
 export default TodoList;