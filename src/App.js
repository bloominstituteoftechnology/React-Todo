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
    
    addTask = ev => {
      // console.log ('button pushed',this.state);
      ev.preventDefault();
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
      console.log('function invoked');

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


    render() {
        return (
          <div className="App" >
            <h2> Welcome to your Todo App! </h2> 
            <TodoList tasks= {this.state.allStuffToDo} changeFinished={this.hangeFinished} />

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