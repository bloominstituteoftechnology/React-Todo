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
              <p style={{fontSize: '5rem'}}>{props.list[idx].task}</p>
            </div>
          ))}
      
        <p>{props.name}</p>
      </div>)
};

export default Todo