import React from 'react';
import { start } from 'pretty-error';

class TodoForm extends React.Component {

    render() {
        return (
          <div>
              <form className="App" onSubmit={props.onSubmit}>
                 <input type="text" placeholder="Add Todo" ></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
           </div>
        );

}
<form className="App" onSubmit={this.onSubmit}>
<input value={this.state.term} onChange={this.onChange} />
<button>Submit</button>
</form>

export default TodoForm;