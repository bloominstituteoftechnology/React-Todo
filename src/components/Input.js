import React from 'react';
import './input.css';

class Input extends React.Component {
  render() {
    return (
      <input type="text" name="Todo" placeholder="Add New Activities Here"/>
    );
  }
}

export default Input;