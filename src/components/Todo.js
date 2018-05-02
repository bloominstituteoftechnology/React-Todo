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
      const styles = this.state.clicked ? { padding: 7, textDecoration: 'line-through', margin:5, backgroundColor: "lightGray" } : { padding: 8, textDecoration: 'none', margin: 5 };
      return (
          <button style={styles} onClick={this.handleClick}>{this.props.item}</button>
      );
  }
}

export default Todo;