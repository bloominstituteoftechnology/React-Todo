// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Fragment } from 'react';
import ToDo from './Todo';
import ToDoForm from './TodoForm';

const ToDoList = props => {
  return (
    <Fragment>
      <ToDo list={props.list} toggleCompleted={props.toggleCompleted} />
      <ToDoForm
        list={props.list}
        handleChanges={props.handleChanges}
        submitForm={props.submitForm}
        addingTask={props.addingTask}
      />
    </Fragment>
  );
};

export default ToDoList;
