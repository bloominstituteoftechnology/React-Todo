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
          <input type='text' placeholder='New Item' onChange={this.handleInput} value={this.state.inputValue}></input>
          <button>Add</button>
        </form>
        <button id='clear' onClick={this.props.clearCompleted}>
          Delete Completed Items
        </button>
      </div>
      
    )
  }
}
