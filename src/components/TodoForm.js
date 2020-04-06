import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
    constructor(){
        super();
        this.state = {
            formValue: ''
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  // class property to submit form
  onSubmit = e => {
      e.preventDefault();
      this.setState({ formValue: ''})
      this.props.addTodo(e, this.state.formValue)  
  }
  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.onSubmit}>
        <input 
            type="text"
            value={this.state.formValue}
            name='formValue'
            onChange={this.onChange} 
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
