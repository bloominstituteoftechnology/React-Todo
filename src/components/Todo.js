import React, { Component } from 'react';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
    console.log(this.props);
  }

  toggle = () => {
    this.setState({clicked: !this.state.clicked});
    console.log(`clicked: ${this.state.clicked}`);
  }

  render() {
    const styles = this.state.clicked ? 
    {textDecoration: 'line-through'} : 
    {textDecoration: 'none'};
    return (
      <div onClick={this.toggle} style={styles}>
        {this.props.todo}
      </div>
    );
  }
}