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
        text: 'add visual elements',
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
              return <Todo key={task.id} completed={task.completed} task={task}/>
            })
          }
        </ul>
      </div>
    );
  }
}

function Todo(props) {
  if (props.task.completed) return <li><strike>{props.task.text}</strike></li>
  else return <li>{props.task.text}</li>
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