import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './Todo.css';

export default class Todo extends React.Component {
  render() {
    return (
      <div className='wrap'>
        <section className='formWrap'>
          <TodoForm add={this.props.add} />
        </section>
        <section className='listWrap'>
          <TodoList
            toggleComplete={this.props.toggle}
            clear={this.props.clear}
            task={this.props.task}
          />
        </section>
      </div>
    );
  }
}
