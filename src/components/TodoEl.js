import { useState } from "react";
import styled from "styled-components";
import { SignButton } from "./SignForm";
import putData from "../utilities/putData";
import deleteData from "../utilities/deleteData";

const TodoContainer = styled.li`
  display: flex;
  align-items: center;
`;
const AboutTodo = styled.label`
  flex: 1;
  display: flex;
  align-items: center;

  span {
    padding: 1px 0.5rem;
  }
`;
const EditInput = styled.input`
  width: 100%;
`;
const EditTodoButton = styled(SignButton)`
  margin: 0;
  font-size: 0.8rem;
  padding: 0.1rem 0.1rem;
  margin-left: 0.2rem;
  letter-spacing: 0;
`;

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
    <TodoContainer>
      <AboutTodo>
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={() => updateTodo({ todo, isCompleted: !isCompleted })}
        />
        {editMode ? (
          <EditInput
            data-testid="modify-input"
            type="text"
            defaultValue={todo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        ) : (
          <span>{todo}</span>
        )}
      </AboutTodo>
      <EditTodoButton
        data-testid={editMode ? "submit-button" : "modify-button"}
        onClick={editTodo}
      >
        {editMode ? "제출" : "수정"}
      </EditTodoButton>
      <EditTodoButton
        data-testid={editMode ? "cancel-button" : "delete-button"}
        onClick={editMode ? cancelEdit : deleteTodo}
      >
        {editMode ? "취소" : "삭제"}
      </EditTodoButton>
    </TodoContainer>
  );
}

export default TodoEl;
