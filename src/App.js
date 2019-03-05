import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
    constructor() {
      super();
      this.state = {
        list: [],
        inputText: "",
      };
    }

    toggleCompleted = (id) => {
      let newArray=[...this.state.list];
      newArray=newArray.map(item => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      });
      this.setState ({list: newArray})
    }

    addItem = event => {
      event.preventDefault();
      if (this.state.inputText) {
        this.setState({
          list: [...this.state.list, {text:this.state.inputText, completed: false, id: Math.random()}],
          inputText: ""
        });
      }
    };

    handleInput = event => {
      this.setState({
        inputText: event.target.value
      });
    };
  
  render() {
    return (
      <div>
        
        <TodoList completeItem= {this.toggleCompleted}
        list={this.state.list} />
        <ToDoForm
          addItem={this.addItem}
          inputText={this.state.inputText}
          handleInput={this.handleInput}
          
      />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
