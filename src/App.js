import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './appStyles.css';


// const stuffToDo = [{
//         task: 'Organize Garage',
//         id: 1528817077286,
//         completed: false,
//     },
//     {
//         task: 'Bake Cookies',
//         id: 1528817084358,
//         completed: false,
//     }
// ];
const stuffToDo = [];



class App extends React.Component {
    constructor() {
      super();
      this.state = {
        allStuffToDo: stuffToDo,
        inputText: '',
      };
    }
    
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
      
      // console.log(event.target.name);
    };
    
    addTask = ev => {
      // console.log ('button pushed',this.state);
      ev.preventDefault();
      this.setState(
            {
            allStuffToDo:[...this.state.allStuffToDo, {
              task: this.state.inputText,
              id: Date.now(),
              completed: false,}
            ], 
            inputText:''
          }
          );
        
        };

    
    change


    render() {
        return (
          <div className="App" >
            <h2> Welcome to your Todo App! </h2> 
            <TodoList tasks= {this.state.allStuffToDo}  />

            <TodoForm
              addTask={this.addTask} 
              inputText={this.state.inputText}
              handleChange={this.handleChange}
            />
          </div>
        );
    }
}

export default App;