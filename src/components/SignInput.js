import styled from "styled-components";

const InpulEl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;

  label {
    padding-right: 0.5rem;
    font-weight: bold;
  }
`;

function SignInput({ type, id, name, setInput }) {
  return (
    <InpulEl>
      <label htmlFor={id}>{name}</label>
      <input
        data-testid={id + "-input"}
        type={type}
        id={id}
        onChange={setInput}
      />
    </InpulEl>
  );
}

export default SignInput;
