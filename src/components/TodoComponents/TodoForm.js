import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <form>
        <input
          type="text"
          name="newItem"
          onKeyPress={e => {
            if (e.keyCode === 13) props.addNewItem();
          }}
          onChange={props.formEventHandler}
          value={props.newItem}
          // placeholder={props.inputText}
          className="inputField"
          id="todo"
          required
          autocomplete="off"
        />
        <label for="todo">
          <span>{props.inputText}</span>
        </label>
        <div className="formButtons">
          <input
            type="submit"
            onClick={props.addNewItem}
            value="Add To List"
            className="subBtn"
          />
          <input
            type="button"
            onClick={props.clearButton}
            value="Clear Complete"
            className="clearBtn"
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
