import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css"



class App extends React.Component {
    constructor(){
      super();
      this.state={
        data: [{
          task: 'Learn Python',
          id: Date.now(),
          completed: false
           }, 
           {
            task: 'Study JS',
            id: Date.now(),
            completed: false
             }, 
          ]
      }
    };

    handleChange = taskName =>{
       this.setState(
        { data: 
          [ ...this.state.data, 
         { 
           task : taskName,
           id: Date.now(),
           completed: false
        }]});

    

    };
    
    togglePurchased = itemId => {
      
      this.setState({
        groceries: this.state.data.map(item => {
          if (item.id === itemId) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      });

     const clearPurchased = () => {
        this.setState({
          groceries: this.state.groceries.filter(item => {
            return !item.purchased;
          })
        });
      };
    
    };
  



  render() {
    return (
      <div>
      <TodoList list={this.state.data} toggle={this.toggleChange} togglePurchased={this.togglePurchased}/>
      <TodoForm handleChange={this.handleChange}   
          clearPurchased={this.clearPurchased} />
      </div>
    );
  }
}

export default App;
