import React from 'react';
import FormInput from './components/TodoForm';
import ToDo from './components/Todo';


const books = [
  {
    name: "The Everything Box by Richard Kadrey",
    id: 1,
    completed: false 
  },
  {
    name: "The Taster by V.S Alexander",
    id: 2,
    completed: false
  },
  {
    name: "The Ten Thousands Doors of January",
    id: 3,
    completed: false
  },
  {
    name: "Dear Haiti, Love Alaine by Maika Moulite, Maritza Moulite",
    id: 4,
    completed: false
  }
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <FormInput />
        <ToDo books={books}/>
      </div>
    );
  }
}

export default App;
