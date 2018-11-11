import React from 'react';
import './App.css'

import TodoSearchBox from './components/TodoComponents/TodoSearchBox';
import TodoCard from './components/TodoComponents/TodoCard';
import AddCategoryForm from './components/TodoComponents/AddCategoryForm';

const dummyData = [
  {
    task: 'Organize Room',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cakes',
    id: 1528817084358,
    completed: false
  }
];

const dummyData1 = [
  {
    task: 'Organize Garage',
    id: 11528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 11528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      categoryText: '',
      category: ['personal', 'family'],
      personalInputText: '',
      familyInputText: '',
      personalTodo: dummyData,
      familyTodo: dummyData1,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e, cat, id) {
    this.setState({
      [cat + 'Todo']: this.state[cat + 'Todo'].map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  addTodo(e, cat) {
    e.preventDefault();

    if (this.state[cat+'InputText'] !== '') {
      this.setState({
        [cat+'Todo']: [
          ...this.state[cat+'Todo'],
          {
            'task': this.state[cat+'InputText'],
            id: Date.now(),
            completed: false
          }
        ],
        [cat+'InputText']: '',
      });
    }
  }

  addCategory(e) {
    e.preventDefault();
    const newCat = this.state.categoryText;
    if (newCat !== '' && !this.state.category.includes(newCat)){
      this.setState({
        category: [...this.state.category, newCat],
        [newCat+'InputText']: '',
        [newCat+'Todo']: [],
        categoryText: '',
      });
    } else {
      alert('No empty input or duplicate allowed')
    }
  }

  removeCompleted(e, cat) {
    e.preventDefault();

    const newTodos = [...this.state[cat+'Todo']].filter(todo => !todo.completed);
    this.setState({[cat+'Todo']: newTodos});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log('updated');
    }
  }

  render() {
    return (
      <div className="todoApp">
        <h2>Welcome to your Todo App!</h2>
        <TodoSearchBox
            filterText={this.state.filterText}
            handleChange={ e => this.handleChange(e) }
        />
        <AddCategoryForm
          handleChange={e => this.handleChange(e)}
          addCategory={e => this.addCategory(e)}
          categoryText={this.state.categoryText}
        />
        <div className="todo--cards">
          {
            this.state.category.map(
              category => (
                <TodoCard
                  key={category}
                  category = {category}
                  todoList={this.state[category+'Todo']}
                  handleClick={(e, cat, id) => this.handleClick(e, cat, id)}
                  handleChange={e => this.handleChange(e)}
                  addTodo={(e, cat) => this.addTodo(e, cat)}
                  removeCompleted={(e, cat) => this.removeCompleted(e, cat)}
                  filterText={this.state.filterText}
                  inputText={this.state[category+'InputText']}
                />
          ))}
        </div>
      </div>
    );
  }
}

export default App;