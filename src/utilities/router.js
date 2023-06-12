import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ToDoList from "../pages/ToDoList";
import Main from "../pages/Main";
import Error from "../pages/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Main />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="todo" element={<ToDoList />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
