import React from 'react';
import './input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <input type="text" name="Todo" placeholder="Add New Activities Here"/>
    );
  }
}

export default Input;
