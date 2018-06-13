onSubmit = (event) => {
    event.preventDefault()
    this.setState({
        todo: '',
        tasks: [...this.state.tasks, this.state.todo]
    });
}

<form className="app" onSubmit={this.onSubmit}>
<input value={this.state.todo} onChange={this.onChange} />
<button>Submit</button>
</form>

export default TodoForm;