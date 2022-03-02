export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange,
  toggleTodo,
}) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>TodoList</h2>
      <label htmlFor="todo">Create todo: </label>
      <input
        name="todo"
        type="text"
        placeholder="Create new todo"
        value={todo}
        onChange={onAddInputChange}
        toggleTodo={toggleTodo}
      />
    </form>
  );
}
