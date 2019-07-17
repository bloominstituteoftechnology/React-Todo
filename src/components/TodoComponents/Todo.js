import React from "react";
import { connect } from "react-redux";

const Todo = props => {
  return (
    <div>
      <p
        className={`${props.item.completed ? "finished-task" : null}`}
        onClick={() => props.handleEventFinish(props.item.id)}
      >
        {props.item.task}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    taskList: state.taskList
  };
};

export default connect(
  mapStateToProps,
  {}
)(Todo);
