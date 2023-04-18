import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("access_token");
    axios.defaults.headers.common["Authorization"] = undefined;
    navigate("/signin");
  };
  return (
    <header>
      <>
        <Link to="signin">로그인</Link>
        <Link to="signup">회원가입</Link>
      </>
      <>
        <button onClick={logOut}>로그아웃</button>
        <Link to="todo">투두리스트</Link>
      </>
    </header>
  );
}

export default Header;
