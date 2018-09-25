import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = { 
      Todos: [
        { task: 'Bake Cookies', id: 1, completed: false },
        { task: 'Prep Cookies for Delivery', id: 2, completed: false },
        { task: 'Deliver Cookies', id: 3, completed: false },
      ],
      Todo: '', 
    };
  }
  
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

export default App;
