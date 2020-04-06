export default function noValue(e, state) {
  const item = document.querySelector('.task');
  if (item.value !== '' || item.value !== null) {
    state({ task: '' });
    this.props.add(e, this.state.task);
  }
}
