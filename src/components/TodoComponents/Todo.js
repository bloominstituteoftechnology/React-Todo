import React from "react";

function Todo(props) { 
  return (
  <div className ="list-card" onClick={() => props.handleToggle(props.todo.id)}
  
  
  style = {props.todo.completed ? {background: '#C5F7F7', opacity: .7, boxShadow: 'none', content: '&#10060;' } : null}>
  {/* <span className = 'cross' onClick={() => props.handleToggle(props.todo.id)}
              style = {props.todo.completed ? {visibility: 'visible'}: {visibility: 'hidden'}}>&#10060;</span> */}
              


  <div className = 'mark'> </div>
        <li onClick={() => props.handleToggle(props.todo.id)}
              style={props.todo.completed ? {  opacity: .5 } : null}>
              
             <h1>{props.todo.task}</h1> 

             
        </li>
        
      </div>
  );
}

// .filter(
//       (todo) => {
//           return todo.task.indexOf(this.state.search) !== -1;
//       }
//   )

export default Todo;