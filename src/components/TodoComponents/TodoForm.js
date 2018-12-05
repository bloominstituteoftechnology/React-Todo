import React from "react";

const ToDoForm = props => {
  return (
    <form>
      <input id="formText" ßplaceholder="Type your task..." />
      <button>Add It! </button>
      <button>Get Outta Here</button>
    </form>
  );
};

export default ToDoForm;