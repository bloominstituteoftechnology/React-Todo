import React, { Component } from 'react';
// import React from 'react';
//
// const ToDoInputField = (props) => {
//   return <input
//     type="text"
//     value={ props.inputValue }
//     onChange={ props.propsChange }
//     placeholder='To Do?' />
// };

class ToDoInputField extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    const text = this.state.text;
    // if ENTER button pressed
    if (event.which === 13) {
      this.props.onSave(text);
      this.setState({ text: ''});
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder='To Do?'
        // value={ this.inputValue }
        value={ this.state.text }
        onChange={ this.handleChange }
        onKeyDown={ this.handleSubmit }
      />
    );
  }

}

export default ToDoInputField;
