import React from 'react';
import List from './components/TodoComponents/TodoList'
import Form from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/Todo'

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
      <div>
        <Form/>
        <List items ={this.state.items}/>
        <TodoList/>
      </div>
    )
  }
}
Form.onChange = (event) =>{
  Form.setState({term:event.target.value});
};

Form.onSubmit = (event) =>{
  event.preventDefault()
  Form.setState({
    term:'',
    items:[...Form.state.items,Form.state.term]
  });
}

export default App;
