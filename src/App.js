import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const TheData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
      super();
      this.state = {
      theList: TheData,
      task: '',
      }
  }

  handleChanges = event => {
      console.log('event: ', event.target.value)
      this.setState({
          task: event.target.value
      });
  }

  updateList = event => {
      event.preventDefault();
      const newItem = {
        task: this.state.task,
      }
      this.setState({
        theList: [...this.state.theList, newItem]
      })
  }

  render() {
      return (
          <div className="form-wrapper">
            <h2>Welcome to your TodoFuckery App!</h2>
              <TodoForm 
                  value={this.state.task}
                  handleChanges={this.state.handleChanges}
                  updateList={this.state.updateList}
              />
              <TodoList task={this.state.theList}/>
          </div>
      )
  }
}
 
export default App;
