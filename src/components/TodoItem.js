export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick,
  toggleTodo,
}) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <li key={todo.id}>
      {todo.text}
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={handleTodoClick}
      ></input>
      <br></br>
      <button onClick={() => onEditClick(todo)}>Edit</button>
      <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
    </li>
  );
}
