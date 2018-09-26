import React from 'react';

import Form from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props);
    this.state={
      term:'',
      items:[]
    };
  };
  render(){
    return(
      <div></div>
    )
  }
}
App.onChange = (event) =>{
  App.setState({term:event.target.value});
};

App.onSubmit = (event) =>{
  event.preventDefault()
  App.setState({
    term:'',
    items:[...this.state.items,this.state.term]
  });
}

export default App;
