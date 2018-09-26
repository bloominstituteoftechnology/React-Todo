import React from 'react';
import List from './components/TodoComponents/TodoList'

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
  onChange = (event) =>{
  this.setState({term:event.target.value});
};

onSubmit = (event) =>{
  event.preventDefault()
  this.setState({
    term:'',
    items:[...this.state.items,this.state.term]
  });
}
render() {
  return (
    <div>
      <form className="App" onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange}/>
          <button>Submit</button>
      </form>
      <List items={this.state.items}/>
    </div>
  );
  }
}

export default App;
