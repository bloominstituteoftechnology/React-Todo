import React from 'react';

const ToDo = props => {
  return (
    <ul>
      {props.tasks.map(task => {
        let test = task.id;
        return <li id = {task.id} key={task.id} onClick = {function(){
            if(task.bool === false){
                task.bool = true;
                document.getElementById(test).style.textDecoration = "line-through";
             }
             else{
                task.bool = false;
                document.getElementById(test).style.textDecoration = "none";
             }
        }
       }>{task.name}</li>;
      })}
    </ul>
  );
};

export default ToDo;