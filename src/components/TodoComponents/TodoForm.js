import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
  }

  handleChange = e => {
    console.log('handleChange: ', e.target.name, e.target.value);
  };

  handleSubmit = (e, todo) => {
    e.preventDefaul();
    console.log('handleSubmit: ', todo);
  };

  render() {
    return (
      <form onSubmit={e => this.hanldeSubmit(e, this.state.todo)}>
        <input type='text' value={this.state.todo} onChange={e => this.handleChange(e)} />
        <button type='submit'>Add Item</button>
      </form>
    );
  }
}

export default TodoForm;
