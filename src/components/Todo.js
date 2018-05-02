// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from "react";

class Todo extends Component {
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
          <div style={styles} onClick={this.handleClick}>{this.props.item}</div>
      );
  }
}

export default Todo;