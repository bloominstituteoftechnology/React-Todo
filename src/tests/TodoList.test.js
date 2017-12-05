+import React, { Component } from 'react';
+import Todo from './Todo';
+class TodoList extends Component {
+    constructor() {
+        super();
+        this.state = {
+            todo: '',
+            todos: []
+        };
+    }
+    handleChange = (event) => {
+        this.setState({
+            todo: event.target.value
+        })
+    }
+    addTodo = (event) => {
+        event.preventDefault();
+        if(!this.state.todo) return;
+        const todo = {
+            item: this.state.todo,
+            completed: false
+        }
+        this.setState({
+            todo: '',
+            todos: [todo, ...this.state.todos]
+        })
+    }
+    remove = (index) => {
+        const todos = this.state.todos.filter((todo, i) => {
+            return index !== i;
+        });
+        this.setState({
+            todos
+        });
+    }
+    toggleComplete = (index) => {
+        const todos = this.state.todos.map((todo, i) => index === i ? { item: todo.item, completed: !todo.completed} : todo);
+        this.setState({
+            todos
+        });
+    }
+    render() {
+        return (
+            <div className="todoList">
+                <form onSubmit={this.addTodo}>
+                    <input type="text" name="todo" value={this.state.todo} onChange={this.handleChange}/>
+                    <button>Add</button>
+                </form>
+                <ul>
+                    {
+                        this.state.todos.map((todo, i) => {
+                            return <Todo key={i} index={i} todo={todo} toggleComplete={() => {this.toggleComplete(i)}} remove={() => this.remove(i)}/>
+                        })
+                    }
+                </ul>
+            </div>
+        )
+    }
+}
+
+export default TodoList; 