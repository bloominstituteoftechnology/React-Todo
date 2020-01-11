import React from "react";

class DeleteButton extends React.Component {
  constructor() {
    super();
  }
  render() {
      //need to provide a function that filters through ToDoList and removes any items that have a Completed? true
    return <button onClick = {'put function here'}>Delete All Completed Tasks</button>;
  }
}

export default DeleteButton;
