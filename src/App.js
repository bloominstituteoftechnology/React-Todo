import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './appStyles.css';


const stuffToDo = [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false,
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false,
    },
];



class App extends React.Component {
    constructor() {
      super();
      this.state = {
        allStuffToDo: stuffToDo,
        inputText: '',
        inputTextThree: '',
        inputTextTwo: '',
      };
    }
    
    handlesChange = event => {
      this.setState({
        [event.target.task]: event.target.value
      });
      
      console.log(event.target.task);
    };
    
    addTask = ev => {
      console.log ('button pushed',this.state);
      ev.preventDefault();
      this.setState(
            {
            updatedTasks: [...this.state.allStuffToDo, {task:this.state.inputText, id: this.state.inputTextTwo, completed: false, }],
            inputText:''

            }
          );
        
        };


    render() {
        return (
          <div className="App" >
            <h2> Welcome to your Todo App! </h2> 
            <TodoList tasks= {this.state.allStuffToDo} />

            <TodoForm
            addTask={this.addTask} 
            inputText={this.state.inputText}
            inputTextTwo={this.state.inputTextTwo}
            inputTextThree={this.state.inputTextThree}
            handlesChange={this.handlesChange}
            />
          </div>
        );
    }
}

export default App;