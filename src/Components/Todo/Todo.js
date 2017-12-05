import React, { Component } from 'react';

/*CSS Styles */
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();
    console.log(this);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  remove = () => {
    this.props.remove(this.props.index);
  };

  render() {
    const styles = this.state.clicked
      ? { textDecoration: 'line-through' }
      : { textDecoration: 'none' };
    return (
      <div>
        <div className="Todo-Container">
          <div className="Button-Container">
            <button className="btn btn--delete" onClick={() => this.remove()}>
              X
            </button>
            <div
              onClick={this.handleClick}
              style={styles}
              className="Todo-Container__item"
            >
            
              {this.props.todo}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
