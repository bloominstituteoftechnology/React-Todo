import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
   // you will need a place to store your state in this component.
   // design `App` to be the parent component of your application.
   // this component is going to take care of state, and any change handlers you need to work with your state

   constructor() {
      super();
      this.state = {
         tasks: [],
      };
   }

   addItem = (taskname) => {
      const newitem = {
         task: taskname,
         id: Math.abs((Math.random() * 56345823453) >>> 2) + taskname, // sort of randomly get a ID
         completed: false,
         toggle: function () {
            this.completed = !this.completed;
         }, // for experiment
      };

      this.setState({ tasks: this.state.tasks.concat(newitem) });
   };

   toggleComplete = (ref) => {
      let targetindex = 0;
      while (true) {
         if (this.state.tasks[targetindex].id === ref.id) {
            break;
         }
         targetindex++;
      }
      let newstate = [...this.state.tasks];
      newstate[targetindex].completed = !newstate[targetindex].completed;
      this.setState({ tasks: newstate });
   };

   clear = () => {
      const newstate = this.state.tasks.filter((i) => !i.completed);
      this.setState({ tasks: newstate });
   };

   render() {
      return (
         <div>
            <h2>Welcome to your Todo App!</h2>

            <TodoForm addItem={this.addItem} clear={this.clear} />
            <TodoList
               tasks={this.state.tasks}
               toggleComplete={this.toggleComplete}
            />
         </div>
      );
   }
}

export default App;
