import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './appStyles.css';

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
    
    addTask = event => {
      // console.log ('button pushed',this.state);
      event.preventDefault();
      this.setState({
        allStuffToDo:[...this.state.allStuffToDo, 
          { task: this.state.inputText,
            id: Date.now(),
            completed: false,}
            ], 
            inputText:''
          }
          );
        
        };
    
    changeFinished = id => {
      this.setState({
        allStuffToDo: this.state.allStuffToDo.map(each =>{
          if (each.id === id) {
            return {
              ...each, 
              completed: each.completed === false ? true : false }; 
          } else {
            return each;
          }
        })
      });
    };

    clearXedOutTask = (ev) => {
      console.log ('clearXedOutTask function invoked');
      ev.preventDefault();
      this.setState({
        allStuffToDo: this.state.allStuffToDo.filter(each => each.completed === false )
      });
    };

    increment = ev => {
      ev.preventDefault();
      this.setState(prevState => ({





      }))
    }


    render() {
        return (
          <div className="App" >
            <h2> Welcome to your Todo App! </h2> 
            <TodoList tasks= {this.state.allStuffToDo} changeFinished={this.changeFinished} />

            <TodoForm
              clearXedOutTask={this.clearXedOutTask}
              addTask={this.addTask} 
              inputText={this.state.inputText}
              handleChange={this.handleChange}
            />
          </div>
        );
    }
}

export default App;