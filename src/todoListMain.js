import React, { Component } from 'react';
import ShowTodo from './showTodo';

class todoListMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ['hello']
    };
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  // <input value={this.state.term} onChange={this.onChange} />
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ShowTodo items={this.state.items} />
      </div>
    );
  }
}


export default todoListMain;
