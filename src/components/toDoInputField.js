import React, { Component } from 'react';

class ToDoInputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({ text: event.target.value });
  };

  handleSubmit(event) {
    const text = this.state.text;
    // if (ENTER button pressed) { then...
    if (event.which === 13) {
      this.props.onSave(text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Something to do?"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default ToDoInputField;
