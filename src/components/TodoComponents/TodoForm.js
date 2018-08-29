function TodoForm(props) {
  return (
    <form>
      <input value={props.task} onChange={props.handleInput} />
      <button onClick={props.addUser}>Add user</button>
    </form>
  );
}
