import React, { Component } from "react";



const AddTodo = props => {

    console.log(props.tL);
    return (<div>{props.tL.map((el, i) =>(
        <div key={i}>{el}<input type="checkbox"/></div>
      ))}</div>);
}

export default AddTodo;
