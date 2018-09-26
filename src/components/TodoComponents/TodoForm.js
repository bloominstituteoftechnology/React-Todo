import React from 'react';

const Form=props=>(
    <div>
    <form className="App" onSubmit={props.onSubmit}>
    <input></input>
        <button>Submit</button>
    </form>
    
  </div>

);
export default Form;