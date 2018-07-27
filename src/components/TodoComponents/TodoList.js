// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todo.css';

const TodoList = ({
  list,
  toggler,
  filter,
  handleSubmit,
  handleChange,
  input
}) => {
  if (filter !== 'all') {
    list = list.filter(todo => {
      return filter === 'active' ? !todo.completed : todo.completed;
    });
  }

  return (
    <ul className="Todo__list text-primary-color">
      <h2>A big list</h2>
      <div>
        {list.map(item => (
          <Todo key={item.id} {...item} onClick={() => toggler(item.id)} />
        ))}
        <TodoForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={input}
        />
      </div>
    </ul>
  );
};

export default TodoList;
