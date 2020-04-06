import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.css';

export default class Todo extends React.Component {
  render() {
    return (
      <>
        <section calssName='formWrap'>
          <TodoForm add={this.props.add} />
        </section>
        <section className='listWrap'>
          <TodoList
            toggleComplete={this.props.toggle}
            clearComplete={this.props.clearComplete}
            task={this.props.task}
          />
        </section>
      </>
    );
  }
}
