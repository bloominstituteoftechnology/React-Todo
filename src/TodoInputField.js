import React, { Component } from 'react';
import './index.scss';

class TodoInputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  };

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <input className='textBox'
        type='text'
        placeholder='Enter Todo List item'
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoInputField;
