import React from "react";
import { button } from '../styles/styles';

const TodoList = props => {
  return (
    <div>
      {props.state.todos.map(item => {
        return (
          <div onClick={() => {
            props.dispatch({
              type: "TOGGLE_COMPLETED",
              payload: item.id
            })
          }}>
            <p key={item.id}>{item.item}</p>
            {
              item.completed ?
                <p className="completedTaskConfirm">COMPLETED!</p>
                :
                <p className="completedTaskConfirm">not completed</p>
            }
          </div>
        );
      })}
      <button style={button}
        onClick={() => {
          props.dispatch({
            type: "REMOVE_COMPLETED"
          });
        }}
      >
        Remove Completed
      </button>
    </div>
  );
};

export default TodoList;