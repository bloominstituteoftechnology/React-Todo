import React from "react";

const InputForm = () => {
  return (
      <div>
          {/* creates title for new task */}
          {/* <h2>{this.state.title}</h2>  */}
        <div>
          {/* <ToDoList list={this.state.list} /> */}
          <form>
            <label>New Task: <input type="text" name="newTask" placeholder="Enter new task"/></label>
            <input type="submit" value="Add this task" />
            <button onClick={this.handleButtonClick}>Clear this entry</button>
          </form>
        </div>
      </div>
  );
};

export default InputForm;
