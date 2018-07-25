import React from 'react';
import './Todo.css';

 const Todo = (props) =>{
      let potentialClass = ()=> {if(props.completed) {return "complete"}else{return ''}};
        console.log(props.completed)
    return <div onClick={props.onClickMethod} className={potentialClass()} id={props.id}> {props.task} </div>;
}


export default Todo;