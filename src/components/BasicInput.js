import styled from "styled-components";

const InputEl = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  label {
    ${(props) => props.label && "padding-right: 0.5rem; font-weight: bold;"}
  }
`;

function BasicInput({ type, id, name, setInput }) {
  return (
    <InputEl label={name}>
      <label htmlFor={id}>{name}</label>
      <input
        data-testid={id + "-input"}
        type={type}
        id={id}
        onKeyUp={setInput}
      />
    </InputEl>
  );
}

export default BasicInput;
