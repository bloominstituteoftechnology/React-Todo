import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
     name: ''
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.name)
  }

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.submit}> 
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}  
        <input type="text" name="name" value={this.state.name} onChange={this.handleChanges} />    
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
