import React, { Component } from 'react';

class TodoInputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
      this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    const text = this.state.text;
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Enter a name"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoInputField;
