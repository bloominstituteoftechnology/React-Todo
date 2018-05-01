import React from 'react';

import { TodoInput } from './TodoInput';

export const TodoForm = props => {
  return (
    <div className="todo-form">
      <TodoInput
        inputClassName="todo-input-text"
        inputOnChange={ props.handleInputChange }
        inputType="text"
        inputValue={ props.inputTextValue }
      />

      <TodoInput
        inputClassName="todo-input-submit"
        inputType="submit"
        inputValue="Submit New Task"
        inputOnClick={ props.handleAddTask }
      />
    </div>
  );
};