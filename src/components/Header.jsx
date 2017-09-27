import React from 'react';

require('./styles/Header.scss');

export default class Header extends React.Component {
  static get defaults() {
    return {
      title: "Unknown",
      instructions: "No instructions have been provided for this assignment.",
      backgroundColor: '#D1F9FF'
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state._title = props.title || Header.defaults.title;
    this.state._instructions = props.instructions || Header.defaults.instructions;
    this.state._backgroundColor = props.backgroundColor || Header.defaults.backgroundColor;
  }

  set title(title) {
    this.state._title = title || Header.defaults.title;
    this.setState(this.state);
  }
  set instructions(instructions) {
    this.state._instructions = instructions || Header.defaults.instructions;
    this.setState(this.state);
  }
  set backgroundColor(color) {
    this.state._backgroundColor = color || Header.defaults.backgroundColor;
    this.setState(this.state);
  }

  get title() {
    return this.state._title;
  }
  get instructions() {
    return this.state._instructions;
  }
  get backgroundColor() {
    return this.state._backgroundColor;
  }

  render() {
    return (
      <div className="header" style={{'backgroundColor': this.backgroundColor}}>
        <h1 className="header title">{this.title}</h1>
        <Instructions instructions={this.instructions}/>
      </div>
    );
  }
}

class Instructions extends React.Component {
  render() {
    return (
      <div className="header instructions">
        <code> {this.props.instructions} </code>
      </div>
    )
  }
}
