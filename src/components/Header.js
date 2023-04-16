import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="signin">로그인</Link>
      <Link to="signup">회원가입</Link>
      <Link to="todo">투두리스트</Link>
    </header>
  );
}

export default Header;
