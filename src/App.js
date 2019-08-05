import React from 'react';
import ReactDom from 'react-dom'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
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
  constructor(){
    super();
    this.state = {
      data: data
    };
  }

  toggleItem = id => {
    console.log(id);

    this.setState({
      data: this.state.data.map(item =>{
        if (item.id === id) {
          return{
            ...item,
            completed: !item.purchased
          };
        } else {
          return item;
        }
      })
    })
  }


  
  
  render() {
    return (
      <>
      
      <TodoList data={this.state.data} toggleItem={this.toggleItem}/>
      <TodoForm />
      </>
    );
  }
}

export default App;
