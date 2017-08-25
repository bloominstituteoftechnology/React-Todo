import React from 'react';

// CSS
const input_css = {
  fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
  fontSize: '14px',
  lineHeight: '2em',
  width: '94%',
  border: 'none',
  borderBottom: '1px solid #ddd',
  backgroundColor: ' #f5f5f5',
  marginLeft: 10
};

// Class Component
class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    // this.state.value is <input> value
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    const text = this.state.value;
    // Press Enter to Save
    if (event.which === 13) {
      this.props.onSave(text);
      this.setState({ value: '' });
    }
  }
  render() {
    return (
      <input
        style={input_css}
        type="text"
        placeholder="what needs to be done?"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default ToDoInput;
