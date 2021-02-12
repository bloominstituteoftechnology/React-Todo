import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Todo from "react";

const TodoList = (props) => {
  console.log(props);
  return (
    <div style={{ margin: "3rem 0" }}>
      {props.list.map((item, idx) => (
        
        
        
        <div
          className='parallax-windows'
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
      </button> */}
      <div id="btn" onClick={() => props.clearTodo()}><span class="noselect">Goal Accomplished! </span><div id="circle"></div></div>
    </div>
  );
};

export default TodoList;
