import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";

export const P = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

function Main() {
  return (
    <PageTemplate pageName="투두">
      <P>상단 탭을 눌러주세요</P>
    </PageTemplate>
  );
}

export default Main;
