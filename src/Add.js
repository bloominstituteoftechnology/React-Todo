import React from 'react'

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  handleInput = (e) => {
    this.setState( {
      inputValue: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleItemAdd(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Add a new item' onChange={this.handleInput}></input>
          <input type='submit' value='Add'></input>
        </form>
      </div>
    )
  }
}
