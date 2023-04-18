import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Tab = styled(Link)`
  font-weight: bold;
  text-decoration: ${(props) => props.to !== props.pathname && "none"};
  color: black;
  letter-spacing: 0.1rem;
`;
const TabButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logOut = () => {
    localStorage.removeItem("access_token");
    axios.defaults.headers.common["Authorization"] = undefined;
    navigate("/signin");
  };

  return (
    <HeaderContainer>
      {localStorage.getItem("access_token") ? (
        <>
          <Tab to="/todo" pathname={pathname}>
            투두리스트
          </Tab>
          <TabButton onClick={logOut}>로그아웃</TabButton>
        </>
      ) : (
        <>
          <Tab to="/signin" pathname={pathname}>
            로그인
          </Tab>
          <Tab to="/signup" pathname={pathname}>
            회원가입
          </Tab>
        </>
      )}
    </HeaderContainer>
  );
}

export default Header;
