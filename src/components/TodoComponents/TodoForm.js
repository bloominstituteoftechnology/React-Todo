import React from 'react';
import './TodoForm.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() { 
    return (    
      <div className="form">
        <input onChange={this.props.onInputChangeHandler} type="text" placeholder="Add Todo item" value={this.props.inputValue} onKeyUp={this.props.onKeyUp}/>
        <button onClick={this.props.addButtonHandler}>Add</button>
        <button onClick={this.props.clearButtonHandler}>Clear</button>
      </div>
    )
  }
}
 
export default TodoForm
