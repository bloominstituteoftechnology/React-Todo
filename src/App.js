import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import './components/TodoComponents/Todo.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          input: '',
          todo: [
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
          ],
      };
  }

  markComplete = item => {
      this.setState((prevState) => {
          const newTodo = prevState.todo;
          newTodo.forEach(x => {
              if(x.id === item.id) x.completed = !x.completed;
          });
          return {
              todo: newTodo,
          }
      });
  }

  handleChange = e => {
      this.setState({
          input: e.target.value,
      });
  }

  addTodo = (e) => {
      if (e.keyCode === 13) e.preventDefault();
      if (!this.state.input){
          alert('Please Enter a Todo');
          return;
      }
      this.setState((prevState) => ({
          input: '',
          todo: prevState.todo.concat(
              {
                  task: prevState.input, 
                  id: Date.now(), 
                  completed: false
              }),
          })
      );
  }

  clearComplete = () => {
      this.setState((prevState) => ({
          todo: prevState.todo.filter(x => !x.completed),
      }));
  }

  render(){
      return (
          <div>
              <TodoForm handleChange={this.handleChange}
                  addTodo={this.addTodo}
                  input={this.state.input}
                  clearComplete={this.clearComplete}
              />
              <TodoList list={this.state.todo} 
                  markComplete={this.markComplete}
              />
              <div className='key'>
                  <div>
                      <div className='complete'></div>
                      <span>= Complete</span>
                  </div>
                  <div>
                      <div className='incomplete'></div>
                      <span>= Incomplete </span>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
