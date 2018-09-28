

import React, {Component}  from 'react';
import TodoList from './TodoList';

class TodoForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  return (
    <form onSubmit>
     <h1>Pascale's ToDos!!!</h1>
    {/* <TodoList items={this.state.items} /> */}
     <input placeholder="enter todo" value={this.props.item} onChange={event => this.props.onChange(event)}/>
     <button onClick = {event => this.props.onSubmit(event)}> submit</button>
     <button > clear</button>
    </form>

);
}}




export default TodoForm;
