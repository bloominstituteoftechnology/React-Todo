const toggleTodo = task => {
    this.setState({
      todo: this.state.todo.map (
        item => (item.task === task ? { ...item, completed: !item.completed} : item)
      )
    })
}

module.exports = { toggleTodo }