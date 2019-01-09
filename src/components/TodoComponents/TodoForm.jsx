import React, { Component } from 'react';

const ToDoForm = props => {
  return (
    <form onSubmit={props.submitForm}>
      <button type="submit"> Add To Do </button>
    </form>
  );
};

export default ToDoForm;
