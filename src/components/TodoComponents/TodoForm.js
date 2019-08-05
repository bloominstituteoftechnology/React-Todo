import React from 'react';

class TodoForm extends React.Component {

  constructor() {
    super()
    this.state = {
      item: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handleChange = e => {
  //       this.setState({
  //           [e.target.name]: e.target.value
  //       });
  //       console.log("handleChange", e.target.name, e.target.value)//logging changes when user is typing in the input field
  //   } 

  submitItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.item);
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input type="text" value={this.item} name="item" onChange={this.handleChange}/>
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm;