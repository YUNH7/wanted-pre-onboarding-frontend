import PageTemplate from "../components/PageTemplate";
import { ErrorMessage } from "./ToDoList";

function Error() {
  return (
    <PageTemplate pageName="404">
      <ErrorMessage>잘못된 접근입니다</ErrorMessage>
    </PageTemplate>
  );
}

export default Error;
