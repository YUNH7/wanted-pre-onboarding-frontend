import { useState } from "react";
import deleteData from "../utilities/deleteData";
import putData from "../utilities/putData";

function TodoEl({ todoObj, reload }) {
  const { id, todo, isCompleted } = todoObj;
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const updateTodo = (data) => {
    putData(`/todos/${id}`, data).then(() => {
      setEditMode(false);
      reload();
    });
  };

  const deleteTodo = () => {
    deleteData(`/todos/${id}`).then(() => reload());
  };

  const editTodo = () => {
    if (editMode) {
      if (editedTodo === todo) setEditMode(false);
      else updateTodo({ todo: editedTodo, isCompleted });
    } else setEditMode(true);
  };

  const cancelEdit = () => {
    setEditedTodo(todo);
    setEditMode(false);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={() => updateTodo({ todo, isCompleted: !isCompleted })}
        />
        {editMode ? (
          <input
            data-testid="modify-input"
            defaultValue={todo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      <button
        data-testid={editMode ? "submit-button" : "modify-button"}
        onClick={editTodo}
      >
        {editMode ? "제출" : "수정"}
      </button>
      <button
        data-testid={editMode ? "cancel-button" : "delete-button"}
        onClick={editMode ? cancelEdit : deleteTodo}
      >
        {editMode ? "취소" : "삭제"}
      </button>
    </li>
  );
}

export default TodoEl;
