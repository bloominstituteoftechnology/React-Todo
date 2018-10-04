import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = { list: [
        {item: 'walk dog',
         id: 1,
         complete: false},
        {item: 'dishes',
         id: 2,
         complete: false},
        {item: 'laundry',
         id: 3,
         complete: false}
      ],
      newItem: '',
      newThing: 1, 
      style: 'none'

      }
    console.log(typeof this.state.list)

  }

  crossOut = (index) => {
    console.log(index)
    this.setState({list: this.state.list.map((item, idx) => {
      if(index === idx) {
        return {
          ...item,
          complete: item.complete === false ? true : false 
        }
      } else {
          return item;
        }
    })})
    //this.state.list.map((item, idx) => {
    //  if(index === idx) {
    //    //put the change of status here
    //  }
    //})
  }

  changeHandler = event => {
    this.setState({newItem: event.target.value})
    // this.setState({newthing: this.state.newThing += 1}) 
    // console.log(this.state.newThing);
  }

  addItem = (event) => {
    event.preventDefault();
    this.setState({list: [...this.state.list, {item: this.state.newItem, id: Date.now(), complete: false}]});
    this.setState({newItem: ''});
  }

  // addItem = (event) => {
  //   event.preventDefault();
  //   this.setState( {
  //       list: [
  //       ...this.state.list,
  //       {item: this.state.newItem, id: Date.now(), complete: false}
  //       ], newItem: ''
  //   });
  // }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          list={this.state.list}
          crossOut={this.crossOut}
          style={this.style}
          />
        <TodoForm
          newItem={this.state.newItem}
          changeHandler={this.changeHandler}
          addItem={this.addItem}
        />
      </div>
    )
  }
}

export default App;
