import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import useGetData from "../utilities/useGetData";
import postData from "../utilities/postData";
import TodoEl from "../components/TodoEl";

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
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="newtodo">새로운 투두</label>
        <input
          data-testid="new-todo-input"
          id="newtodo"
          onChange={(e) => e.key === "Enter" && createTodo()}
        />
        <button
          data-testid="new-todo-add-button"
          type="button"
          onClick={createTodo}
        >
          추가
        </button>
      </form>
      {error ? (
        <h2>요청 실패</h2>
      ) : (
        <ul>
          {data?.map((todo) => (
            <TodoEl key={todo.id} todoObj={todo} reload={getData} />
          ))}
        </ul>
      )}
    </PageTemplate>
  );
}

export default ToDoList;
