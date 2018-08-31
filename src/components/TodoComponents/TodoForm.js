import React, {Component} from "react";

function TodoForm(props) {
  return (
    <form>
      <input autoFocus
        value={props.inputText}
        onChange={props.handleInput}
        placeholder={'【﻿ｉｎｓｅｒｔ　ｔａｓｋ】'}
      />
      <button
        onClick={props.addTodo}>
        【﻿ａｄｄ　ｔｏｄｏ】
      </button>
      <button
        onClick={props.removeCompleted}>
        【﻿ｃｌｅａｒ　ｔｏｄｏ】
      </button>
    </form>
  );
};

export default TodoForm;