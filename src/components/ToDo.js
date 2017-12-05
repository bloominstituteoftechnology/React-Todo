import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }
}

handleClick = () => {
  this.setState({clicked: !this.state.clicked});
}

render() {
  const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none'};
  return (
    <div style={styles} onClick={this.handleClick}>{this.props.todo}</div>
      {this.props.thing}
    </div>
  );
}
}

const Todo = (props) => {
  return (
<div>
<form> 
  <input type="text" placeholder="Enter a new To Do!" value={this.props.TodoList} style="text-decoration: none"/>
</form>
<button>
  Submit
  </button>
  </div>
  );
};

export default Todo;