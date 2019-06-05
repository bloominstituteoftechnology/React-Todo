import React from 'react';

const listoftodos = [];
class App extends React.Component {
  constructor(props){
    super(props);
   
      // you will need a place to store your state in this component.
      // design `App` to be the parent component of your application.
      // this component is going to take care of state, and any change handlers you need to work with your state
     this.state = {   
    todos: listoftodos,
    task:''
    
    
  };
  }
  
  render() {
    return (
     
    );
  }
}

export default App;
