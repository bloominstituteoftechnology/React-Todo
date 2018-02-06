import React from 'react';

const App = () => (
  <div>
    <h2>Todo App</h2>
      <Tasks />
  </div>
);

class Tasks extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        text: 'make tasks show',
        completed: true,
      },
      {
        id: 2,
        text: 'toggle on/off',
        completed: true,
      },
      {
        id: 3,
        text: 'create form to add todos',
        completed: false,
      },
      {
        id: 4,
        text: 'add ability to toggle on click',
        completed: false,
      },
    ],
  }; // state
// <button onClick={this.changeMessage}>Change Message</button>

  addTodo = (input) => {
    this.state.tasks.push({
      id: this.state.tasks.length,
      text: input,
      completed: false,
    });
  }

  toggleTodo = (event) => {
    if (event.target.completed) {
      this.setState({completed: false})
    } else this.setState({completed: true})
  }

  render() {
    return (
      <div className="task-list">
        <ul>
          {
            this.state.tasks.map(task => {
              return <Todo key={task.id} toggleTodo={this.toggleTodo} task={task}/>
            })
          }
        </ul>
        <form>
          Add a Todo: <input type="text" name="input" onSubmit={this.addTodo("input")}/>
        </form>
      </div>
    );
  }
}

function Todo(props) {
  if (props.task.completed) return <li onClick={props.toggleTodo}><strike>{props.task.text}</strike></li>
  else return <li onClick={props.toggleTodo}>{props.task.text}</li>
}

export default App;

// function Movie(props) {
//   return <li>{props.movie.title}</li>;
// }

// class MovieList extends React.Component {
//   // constructor() {
//   //   // data initialization
//   // }
//   state = {
//     tasks: [
//       {
//         id: 1,
//         task: 'The Lord of The Rings',
//       },
//       {
//         id: 2,
//         task: 'The Hobbit',
//       },
//       {
//         id: 3,
//         task: 'Star Wars',
//       },
//     ],
//     message: 'old message',
//   };

//   changeMessage = () => {
//     // this.setState() --> pass in an object
//     this.setState({message: 'new Message'});
//   }

//   // data for the component should live in state
//   render() {
//     return (
//       <div className="movie-list">
//         <button onClick={this.changeMessage}>Change Message</button>
//         <h1>{this.props.heading}</h1>
//         <h2>{this.state.message}</h2>
//         <ul>
//           {
//             this.state.tasks.map(task => {
//               return <Movie key={task.id} task={task} />;
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<MovieList heading="List of Movies" />, document.getElementById('root'));