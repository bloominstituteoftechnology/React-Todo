import React, { Component } from 'react';
import './ChildComponent.css';

class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

 //  handleXClick = () => {
 //   this.props.action(this.props.index);
 // }

  render() {
    console.log('props: ', this.props);
    const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    return (
      <div>
      <div class="two" style={styles} onClick={this.handleClick}>{this.props.thing}</div>
      <button class="one" onClick={this.handleXClick}>X</button>
      </div>
    )
  }
}

export default ChildComponent;
