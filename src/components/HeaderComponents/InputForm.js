import React from "react";

const InputForm = () => {
  return (
    <div>
      <div>
          <h2>{this.state.title}</h2>
        <div>
          {/* <ToDoList list={this.state.list} /> */}
          <input
            name="task"
            value={this.state.task}
            placeholder="Describe new task"
            onChange={this.handleListChange}
          />
          <button onClick={this.handleButtonClick}>Add this task</button>
        </div>
      </div>
      <InputForm>Input form appears here.</InputForm>
    </div>
  );
};

export default InputForm;
