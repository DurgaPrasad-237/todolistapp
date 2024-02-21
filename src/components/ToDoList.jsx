import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (

    <div className='alltodos'>
        {todos.map((t) => (
        <div className='taskarea'>
            <div className='textarea'  key={t.id}>{t.todo}</div>
            <div>
            <button className='edit' onClick={() => handleEdit(t.id)}>edit</button>
            <button className='delete' onClick={() => handleDelete(t.id)}>delete</button>
            </div>
        </div>
         ))}
    </div>

  );
};

export default TodoList;


