import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const toDo = [
  {
    task: "Develop a new feature for the web application",
    id: 1,
    completed: false,
  },
  {
    task: "Buy a helmet for cycling",
    id: 2,
    completed: false,
  },
  {
    task: "Have lunch with Maria on Wednesday ",
    id: 3,
    completed: false,
  },
  {
    task: "Analyze the survey results",
    id: 4,
    completed: false,
  },
  {
    task: "Deliver the company accounts on day 30",
    id: 5,
    completed: false,
  },
  {
    task: "Publish an article on Monday",
    id: 6,
    completed: false,
  },
  {
    task: "Save a music CD to have in the car",
    id: 7,
    completed: false,
  },
  {
    task: "Call dad for his birthday",
    id: 8,
    completed: false,
  },
  {
    task: "I would like to visit New Zealand",
    id: 9,
    completed: false,
  },
  {
    task: "Learn to use Sketch",
    id: 10,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { toDo: toDo };
  }

  completeItem = (itemID) => {
    this.setState({
      toDo: this.state.toDo.map((item) => {
        if (item.id === itemID) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  addToDo = (name) => {
    this.setState({
      toDo: [
        ...this.state.toDo,
        {
          task: name,
          id: this.state.toDo.length,
          completed: false,
        },
      ],
    });
  };

  clearCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter((item) => !item.completed),
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Todo List: MVP!</h2>
        <TodoList
          item={this.state.toDo}
          completeItem={this.completeItem}
          clearItem={this.clearCompleted}
        />
        <TodoForm submitHandler={this.addToDo} />
      </div>
    );
  }
}
export default App;
