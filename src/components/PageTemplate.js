import styled from "styled-components";

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageTitle = styled.h1`
  font-size: 2rem;
`;

function PageTemplate({ pageName, children }) {
  return (
    <MainContent>
      <PageTitle>{pageName}</PageTitle>
      {children}
    </MainContent>
  );
}

export default PageTemplate;
