import React from "react";

const InputForm = () => {
  return (
      <div>
          {/* creates title for new task */}

        <div>

          <form>
            <label>New Task: <input type="text" name="newTask" placeholder="Enter new task"/><input type="text" name="newTaskContent" placeholder="Enter task description"/></label>
            <input type="submit" value="Add this task" />
            <button onClick={this.handleButtonClick}>Clear this entry</button>
          </form>
        </div>
      </div>
  );
};

export default InputForm;
