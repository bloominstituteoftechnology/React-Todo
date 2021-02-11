import React from "react";
import Todo from "react";

const TodoList = (props) => {
  console.log(props);
  return (
    <div style={{ margin: "3rem 0" }}>
      {props.list.map((item, idx) => (
        <div
          onClick={() => props.toggleDone(props.list[idx].id)}
          key={idx}
          style={{
            border: ".1rem solid black",
            cursor: "pointer",
            margin: "2rem 0",
            textDecoration:  'line-through',
            backgroundColor:  'black',
            opacity:  '0.4',
            boxShadow:  '0 0 1rem lime'
          }}
        >
            {/* <Todo key={item.id}  item={item}/>  */}
          <p>{props.list[idx].task}</p>
        </div>
      ))}
      
      <button onClick={() => props.clearTodo()}>-</button>
    </div>
  );
};

export default TodoList;
