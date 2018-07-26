import React from 'react';
import './Todo.css';

 const Todo = (props) =>{
      let potentialClass = ()=> {if(props.completed) {return "complete"}else{return ''}};
    return <div onClick={props.onClickMethod} className={potentialClass()} key={props.task} id={props.id}> &#9885;&nbsp;{props.task} </div>;
}


export default Todo;