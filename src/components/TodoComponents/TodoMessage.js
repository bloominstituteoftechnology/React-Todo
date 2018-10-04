import React from 'react';

const TodoMessage = props => {
  return (
    <div className="TodoMessage" style={props.inlineStyle}>
      {/* <i className="fas fa-hand-paper" /> */}
      <i className="fas fa-exclamation-triangle" />
      Enter a task, s'il vous plaît!
    </div>
  );
};

export default TodoMessage;
