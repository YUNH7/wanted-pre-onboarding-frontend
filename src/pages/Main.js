import styled from "styled-components";
import PageTemplate from "../components/PageTemplate";

export const Info = styled.h2`
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

function Main() {
  return (
    <PageTemplate pageName="투두">
      <Info>상단 탭을 눌러주세요</Info>
    </PageTemplate>
  );
}

export default Main;
