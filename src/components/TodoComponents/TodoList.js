// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todolist.map(item =>{
                return(
                    <Todo todo ={item} />
                )
            })}

        </div>
    //   <div>
    //     {props.todo.map(todo => (
    //         return
    //       <Todo
    //         key={todo.id}
    //         task={todo}
    //       />
    //     ))}
    //   </div>
    );
  };
            
        
         
    
    

export default TodoList