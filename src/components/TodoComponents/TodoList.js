// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
const ToDoList = (props) => {
  return (
    <React.Fragment>
      {
        props.list.map(item => {
          return (
            <div key={item.id} className={`todoComponent ${item.completed}`}>
              <p>{item.task}</p>
              <div className="icons">
                <i className={item.icon} onClick={() => props.completeTask(item.id)}></i>
                <i className="fas fa-times" onClick={() => props.closeTask(item.id)}></i>
              </div>
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default ToDoList;

// onClick = { props.handleDelete }