import React, { Component } from 'react';


class TodosList extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  
  render() {
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };

    return (
      <div className="card card-cascade wider">
        <div className="card-body text-center" style={styles} onClick={this.handleClick}>{this.props.todo.text}</div>
        <button className="btn btn-unique waves-effect waves-light" onClick={() => this.props.deleteTodo(this.props.todo)} value={this.props.todo}>delete</button>
      </div>
    );
  }


}


export default TodosList;