import React from "react";
<<<<<<< HEAD
import useStyles from "../stylesheets/useStyles";
import Todo from "./Todo";

const TodoList = (props) => {
  const classes = useStyles();

  console.log("Received props from TodoList", props);
  console.log(classes);

  return (
    <div className='d-flex flex-column justify-content-center'>
      <div className="d-flex justify-content-center" style={{justifySelf: 'center'}}>
        <Todo props={props} />
      </div>
      );
=======
import "bootstrap/dist/css/bootstrap.css";
// import Todo from "react";

const TodoList = (props) => {
  console.log(props);
  return (
    <div className="d-flex, justify-content-center flex-column"
     style={{ margin: "3rem 0" }}>
      {props.list.map((item, idx) => (
        
        
        
        <div
          className='parallax-windows d-flex justify-content-center'
          onClick={() => props.toggleDone(props.list[idx].id)}
          key={idx}
          // if (this is true make the styler this way } else { make the style as below
          style={{
            border: ".1rem solid black",
            cursor: "pointer",
            margin: "2rem 0",
            backgroundColor: "white",
            color: "#5E2605",
            boxShadow: "-1rem -1rem 1rem #362819	",
            borderRadius: '15px'
          }}
        >
          {/* <Todo key={item.id}  item={item}/>  */}
          <p>{props.list[idx].task}</p>
        </div>
      ))}

      {/* <button
        style={{
          margin: "1.5rem auto",
          boxShadow: "-1rem -1rem 1rem #362819	",
          borderRadius: "10px",
        }}
        onClick={() => props.clearTodo()}
      >
        -
      </button> */}<div className='d-flex justify-content-center'>
      <div className='d-flex justify-content-center' id="btn" onClick={() => props.clearTodo()}><span style={{alignSelf: 'center'}}className="noselect">Goal Accomplished! </span><div id="circle"></div></div> </div><p style={{padding: '1.5rem', fontSize: '1.25rem'}}>Make sure to celebrate your victories! </p>
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
    </div>
  );
};

export default TodoList;
