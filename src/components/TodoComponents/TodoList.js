import React from 'react';
import './Todo.css';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const  TodoList = (props) => {
  
return ( <div className="display" >{props.text.map( x =>{
    return(

    <div key={x.id} id={x.id}>
        {x.text} <br />
        <br />
    </div> 
    )
})}</div>
)    
}




export default TodoList