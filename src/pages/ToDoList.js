import PageTemplate from "../components/PageTemplate";

function ToDoList() {
  return (
    <PageTemplate pageName="투두">
      <form>
        <input data-testid="new-todo-input" />
        <button data-testid="new-todo-add-button" type="button">
          추가
        </button>
      </form>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 1</span>
          </label>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </li>
      </ul>
    </PageTemplate>
  );
}

export default ToDoList;
