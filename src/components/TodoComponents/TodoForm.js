import React from 'react';
import List from './TodoList'
const Form=props=>(
    <div>
    <form className="App" onSubmit={Form.onSubmit}>
        <input value={Form.state.term} onChange={Form.onChange}/>
        <button>Submit</button>
    </form>
  </div>

);
export default Form;