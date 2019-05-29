import React from 'react';
import './Todo.css';

export default () => (
  <form>
    <input
      type='text'
    />
    <input
      type='submit'
      value='Add Todo'
    />
    <button>Clear Completed</button>
  </form>
);