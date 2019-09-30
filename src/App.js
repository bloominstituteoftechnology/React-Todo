import React from 'react';

const seedTodos = [
  {
    title: '🏃‍♂️ 2 miles',
    id: 1234,
    completed: false,
    category: 'Health and Wellness',
  },
  {
    title: 'Play Untitled Goose Game',
    id: 1235,
    completed: false,
    category: 'Entertainment',
  },
  {
    title: `Prep this week's meals`,
    id: 1236,
    completed: false,
    category: 'Health and Wellness',
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [seedTodos],
    };
  }

  // need a method to add a todo item
  // method to complete a todo item
  // method to clear completed todo items

  // stretch
  // method to place todo items in specific buckets according to the item's category

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
