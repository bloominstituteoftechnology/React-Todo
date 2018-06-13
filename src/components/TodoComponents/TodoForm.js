import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() { 
    return (    
      <div>
        <input onChange={this.props.onInputChangeHandler} type="text" placeholder="Add Todo item"/>
        <button onClick={this.props.addButtonHandler}>Add</button>
        <button onClick={this.props.clearButtonHandler}>Clear</button>
      </div>
    )
  }
}
 
export default TodoForm
