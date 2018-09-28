import React from "react";

class TodoForm extends React.Component {
  render() {
  console.log(this.props)
    return (
      <div className="form">
        <div className="form-input">
          <input type="text" name="task" onKeyDown={this.props.keypress} value={this.props.value} placeholder={"...todo"} onChange={this.props.update} />
        </div>
        <div className="form-actions">
          <div  className ="btn"onClick={this.props.submit}>Add</div>
          <div className ="btn"onClick={this.props.filter} >clear </div>
        </div>
      </div>
    );
  }
}


export default TodoForm;