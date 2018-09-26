import React from "react";

const InputForm = () => {
  return (
      <div>
          {/* creates title for new task */}
          {/* <h2>{this.state.title}</h2>  */}
        <div>
          {/* <ToDoList list={this.state.list} /> */}
          <form>
            <label>New Task: <input type="text" name="newTask" /></label>
            <input type="submit" value="Submit" />
            <button onClick={this.handleButtonClick}>Add this task</button>
          </form>
        </div>
      </div>
  );
};

export default InputForm;
