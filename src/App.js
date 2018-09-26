import React from 'react';
import List from './components/TodoComponents/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      item: []
    };
  }

  onSubmit= event => {
    event.preventDefault()
   this.setState({
     input: "",
     item: [this.state.items, this.state.term]
   });

  };

  onChange= event => {
   this.setState({input: event.target.value});

  };



  render() {
    return (
      <div>
      <form className="App">
       <h1>Pascale's ToDos!!!</h1>
 <List items={this.state.items} />
       <input placeholder="enter todo" value={this.state.item} onChange={this.onChange}/>
       <button onClick = {this.handleClick}> submit</button>
     </form>
     </div>
    );
  }
}

export default App;
