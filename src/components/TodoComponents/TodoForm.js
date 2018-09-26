import React from 'react';

const FormInput = (props) => {

  return (
    <form>
      <input onChange = {this.handleInputs} />
      <button onClick = {this.handleSubmit}>Add todo</button>
      <button> Clear </button>
    </form>
  )

};

export default FormInput;