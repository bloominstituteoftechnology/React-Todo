import React from 'react';

class Todo extends React.Component {
  toggleCheck = () => {
    this.props.toggleCheck(this.props.task)
  }
  render() {
    return(
      <div>
        <label style={this.props.completed ? {textDecoration:"line-through", color:"gray"} : {textDecoration: "none", color:"black"}}>
          <input 
            type="checkbox"
            name={this.props.task}
            checked={this.props.completed}
            onChange={this.toggleCheck}
          />{this.props.task}
        </label>
        
      </div>
    )
  }
}

export default Todo;