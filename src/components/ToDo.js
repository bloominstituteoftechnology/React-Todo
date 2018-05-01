import React, { Component } from 'react'
class ToDo extends Component {
  constructor() {
    super()
    this.state = {
      clicked: true
    }
  }
  Clicked = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const crossed = this.state.clicked
      ? { textdecorationline: 'underline line-through' }
      : { textdecorationline: 'none' }
    return (
      <div onClick={this.Clicked}>
        {this.props.ToDo}
      </div>
    )
  }
}
export default ToDo
