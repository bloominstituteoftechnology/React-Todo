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
  input,
  title
}) => {
  if (filter !== 'all') {
    list = list.filter(todo => {
      return filter === 'active' ? !todo.completed : todo.completed;
    });
  }

  return (
    <ul className="Todo__list text-primary-color">
      <h2>{title}</h2>
      <div>
        {list.map(item => (
          <Todo key={item.id} {...item} onClick={() => toggler(item.id)} />
        ))}
        <TodoForm
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={input}
          placeholderText="New Task"
        />
      </div>
    </ul>
  );
};

export default TodoList;
