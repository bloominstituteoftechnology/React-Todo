import React from 'react';
import Todo from './components/TodoComponents/Todo';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      todoData:
      [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
          decorate: 'no-decoration'
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
          decorate: 'no-decoration'
        }
      ],
      filter: [],
      newTask: '',
    };
  };

  addTodoInput = event => {
    event.preventDefault();
    this.setState({
      filter: [...this.state.filter, {task: this.state.newTask,
                                          id: Date.now(),
                                          completed: false,
                                          decorate: 'no-decoration'}],
      todoData: [...this.state.todoData, {task: this.state.newTask,
                                          id: Date.now(),
                                          completed: false,
                                          decorate: 'no-decoration'}],
     newTask: ''
    });
   
  };

  ///////////////////////////////////////////////////////////////
  inputChange = event => {
    
    this.setState({[event.target.name]: event.target.value});
    
  };

//////////////////////////////////////////////////////////////////
  completeTaskSelect = index => {
    this.setState({
      filter: this.state.filter.map((task, idx) => {
        if(index != idx) {
          return task;
        } else {
          return {
            ...task,
            completed: task.completed === false ? true : false,
            decorate: task.decorate === 'no-decoration' ? 'slash' : 'no-decoration'
          }
        }
      })
    })

    
  };
/////////////////////////////////////////////////////////
  componentWillMount = () => {
    this.setState({filter: this.state.todoData});
   
  };

  
  completeTaskWipe = event => {
    this.setState({
      filter: this.state.filter.filter(task => {
        if(task.completed === false) {
          return task;
        }
      })
    })
  };
///////////////////////////////////////////////////////////
  inputChangeFilter = event => {
    let filterTasks = this.state.todoData;
    filterTasks = this.state.todoData.filter(tasks => {
      let upperCase = tasks.task.toUpperCase();
      if(upperCase.includes(event.target.value.toUpperCase())) {
        return tasks;
      }})
      this.setState({filter: filterTasks});
      
    };

  render() {
    return (
      <div className = 'app'>
        <Todo 
        filter={this.state.filter} 
        newTask={this.state.newTask}
        addTodoInput={this.addTodoInput}
        inputChange={this.inputChange}
        completeTaskSelect={this.completeTaskSelect}
        decorate={this.state.decorate}
        completeTaskWipe={this.completeTaskWipe}
        inputChangeFilter={this.inputChangeFilter}
          />
      </div>
    );
  }
}

export default App;
