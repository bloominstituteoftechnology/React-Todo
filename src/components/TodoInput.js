import React from 'react';

export const TodoInput = props => {
  return (
    <input
      className={ props.inputClassName }
      type={ props.inputType }
      value={ props.inputValue }
      onClick={ props.inputOnClick }
      onChange={ props.inputOnChange }
    />
  );
};