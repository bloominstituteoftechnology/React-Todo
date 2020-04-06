import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class Todo extends React.Component {
  render() {
    return (
      <>
        <section calssName='formWrap'>
          <TodoForm add={this.props.add} />
        </section>
        <section className='listWrap'>
          <TodoList />
        </section>
      </>
    );
  }
}
