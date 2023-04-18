import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoEl from "../components/TodoEl";
import PageTemplate from "../components/PageTemplate";
import { SignButton } from "../components/SignForm";
import useGetData from "../utilities/useGetData";
import postData from "../utilities/postData";

const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.3rem;

  input {
    flex: 1;
  }
`;
const AddTodoButton = styled(SignButton)`
  margin: 0;
  padding: 0.1rem 0.3rem;
  margin-left: 0.3rem;
`;
const ErrorMessage = styled.h2`
  color: red;
  font-size: 1.5rem;
`;
const TodoBox = styled.ul`
  list-style: none;
  width: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
  }
`;

function ToDoList() {
  const [data, error, getData] = useGetData("/todos");
  const navigate = useNavigate();

  const createTodo = () => {
    const todoInput = document.querySelector("#newtodo");
    const todo = todoInput.value;
    if (todo)
      postData("/todos", { todo })
        .then(() => getData())
        .then(() => (todoInput.value = ""));
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigate("/signin");
  }, []);

  return (
    <PageTemplate pageName="투두">
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="newtodo" />
        <input
          data-testid="new-todo-input"
          type="text"
          id="newtodo"
          onKeyUp={(e) => e.key === "Enter" && createTodo()}
        />
        <AddTodoButton
          data-testid="new-todo-add-button"
          type="button"
          onClick={createTodo}
        >
          추가
        </AddTodoButton>
      </FormContainer>
      {error ? (
        <ErrorMessage>요청 실패</ErrorMessage>
      ) : (
        <TodoBox>
          {data?.map((todo) => (
            <TodoEl key={todo.id} todoObj={todo} reload={getData} />
          ))}
        </TodoBox>
      )}
    </PageTemplate>
  );
}

export default ToDoList;
