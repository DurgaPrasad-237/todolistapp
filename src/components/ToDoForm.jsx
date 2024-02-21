import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
      className='input-area'
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button  className='addBtn' type="submit"> {editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;