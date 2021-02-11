// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//import React
import React from 'react'

//imported Todo component
import Todo from './Todo'


const TodoList = props => {
    // console.log(props)
    //returns a map of each todo item from todo array, on click clearCompleted is used to remove items.
    return (
        <div>
            {props.todo.map(item =>{
               return <Todo toggleCompleted={props.toggleCompleted} key={item.id} item={item}/>
            })}
            <button onClick={() => props.clearCompleted() }>Clear Completed</button>
        </div>
        
    );
    
};

export default TodoList;