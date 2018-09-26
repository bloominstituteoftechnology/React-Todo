import React from 'react';

const FormInput = (props) => {

  return (
    <form>
      <input value = {props.input} onChange={props.handleInputs}/>
      <button onClick = {props.handleSubmit}>Add todo</button>
      <button> Clear </button>
    </form>
  )

};

export default FormInput;