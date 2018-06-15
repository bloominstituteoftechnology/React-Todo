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
        <input onChange={this.props.onInputChangeHandler} type="text" placeholder="Type here and hit enter" value={this.props.inputValue} onKeyUp={this.props.onKeyUp}/>
        <button className="add-btn" onClick={this.props.addButtonHandler}>Add</button>
        <i data-toggle="tooltip" data-placement="top" title="Clear completed tasks" className="far fa-trash-alt clr-btn" onClick={this.props.clearButtonHandler}></i>
        {/* <button className="clr-btn" onClick={this.props.clearButtonHandler}>Clear</button> */}
      </div>
    )
  }
}
 
export default TodoForm
