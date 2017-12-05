import React, { Component } from 'react';

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      clicked: false
    };
  }

  whenClicked = () => {
    this.setState( { clicked: !this.state.clicked} );
  }
  
  render () {
    const styler = this.state.clicked ? {textDecoration: 'line-through'} : {textDecoration: 'none'} ;
    return <div style={styler} onClick={this.whenClicked}>{this.props.todo}</div>;
  }
}

export default Todo;