import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        todos: [ 'Organize Garage'
      ],

    next: [
      {
        job: "construction worker"
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        job: "firefighter" 
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
      // todo: '',

        // this.handleChange = this.handleChange.bind(this), //A ver si no necesitas más
        // this.handleSubmit = this.handleSubmit.bind(this), //
        // this.handleClick = this.handleClick.bind(this),
      }

        // handleChange(event) {
        //   this.setState({value: event.target.value});
        // }
        //
        // handleSubmit(event) {
        //   //que aqui se agregue y se quiten  los items marcadaos compo
        //   //completed que están (y deben estar) tachados
        //   event.preventDefault();
        // }
        //
        // handleClick(event) {
        //   //que se tachen el texto del todo clickeado
        }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    console.log(this.state.next)
    return (
      <div>
        <h1> Todo List: MVP </h1>
        {/* <TodoList todoList={this.state.todos} /> */}
        {this.state.next.map(pablo => <Todo todoItem={pablo} />)}
        {/* <TodoForm /> */}
      </div>
    );
  }
}

export default App;
