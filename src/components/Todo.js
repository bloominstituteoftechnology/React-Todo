<<<<<<< HEAD
import React from "react";

const Todo = (props) => {
  console.log(props, props.props.list);

  return (
    <div className="d-flex justify-content-center flex-column flex-wrap" style={{marginTop: '15vh', alignContent: 'start'}}>
      {props.props.list.map((item, idx) => {
        return (
          <div
            className="d-flex justify-content-center flex-column cards"
            key={idx}
          >
            <div
              onClick={() => props.props.toggleDone(props.props.list[idx].id)}
              key={idx}
            >
              <p
                className="display-4"
                style={{
                  color: `${
                    props.props.list[idx].completed === false
                      ? "lime"
                      : "#444"
                  }`,
                  textDecoration: `${
                    props.props.list[idx].completed === false
                      ? "none"
                      : "line-through"
                  }`,
                  textShadow: `${
                    props.props.list[idx].completed === false
                      ? "none"
                      : "0 0 1rem lime"
                  }`,
                }}
              >
                {props.props.list[idx].task}
              </p>
            </div>
            <div
              onClick={() => props.props.clearTodo()}
              style={{
                padding: "4vh 3vw",
                border: "2px solid white",
                backgroundColor: "#444",
                opacity: "0.7",
              }}
            >
              <em>Mission: Completed</em>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
=======
import React from 'react'

const  Todo = props =>  {

    return (
        <div className='d-flex justify-content-center todo-font'>
        {props.list.map((item, idx) => (
            <div
            className='d-flex justify-content-center'
              onClick={() => props.toggleDone(props.list[idx].id)}
              key={idx}
              style={{
                border: ".1rem solid black",
                cursor: "pointer",
                margin: "2rem 0",
                boxShadow: props.list.complete && '0 0 1rem lime', 
                borderRadius: '10px', 
                
                
              }}
            >
              <p style={{fontSize: '5rem', padding: '1.5rem'}}>{props.list[idx].task}</p>
            </div>
          ))}
      
        <p>{props.name}</p>
      </div>)
};

export default Todo
>>>>>>> 5d52c623f0d15e4a8a8d99500c60f06a718d8e18
