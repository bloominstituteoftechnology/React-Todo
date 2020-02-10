import React from 'react';
import uuid from 'uuid';

// we need some initial data
const initialTodos = [
  {
    task: 'Organize Garage',
    id: uuid(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: uuid(),
    completed: false
  }
];

// make a function that behaves like axios.get("todosURL")
const fakeTodosEndpoint = () => {
  return Promise.resolve(initialTodos);
};

// imagine hooks are not a thing
// and we need state
// class component it is!
class App extends React.Component {
  constructor(props) {
    // components are initialized with props
    // do not forget to call the parent constructor
    super(props);

    this.state = {
      // what slices?
      todos: [],
      newTodoTitle: '',
    }
  }
}

export default App;
