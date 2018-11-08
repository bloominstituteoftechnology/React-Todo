import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) => {
    return (
        <div className='todo-card'>
             {props.toDoItems.map(item =>  /*toDoItems is holding in all the data from our array toDo  */
                (
                <Todo  /*we map over  and send   the results to Todo.js component */
                key={item.toDoItems} 
                item={item} 
                />
                ))} 

                
        </div>
    ); 
}

export default TodoList;