import React, { Component } from 'react';
import Heading from './Heading';
import TodoForm from './TodoForm';
import '../index.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='div-container'>
        <Heading />
        <TodoForm />
      </div>
    );
  }
}