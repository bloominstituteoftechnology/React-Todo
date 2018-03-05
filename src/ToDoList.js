import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      list: ['clean bathroom', 'mow lawn', 'bath dog'],
      addToList: ''
    }
  }

  handleClick = () =>{
    this.setState({ clicked: this.state.clicked });
    console.log('clicked: ', this.state.clicked);
  }

  render(){
    return (
      <div> 
        {this.state.list.map(list2 => <div>{list2}</div>)}
      </div>)
    return (
      <div onClick={this.handleClick}>{this.props.thing}</div>
    )
  }
}

export default ToDoList;