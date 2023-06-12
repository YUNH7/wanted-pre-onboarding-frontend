import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BasicInput from "./BasicInput";

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: fit-content;
  width: 30%;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Notification = styled.p`
  color: red;
  font-size: 0.8rem;
`;
export const SignButton = styled.button`
  background: white;
  border: none;
  box-shadow: 1px 1px 3px;
  margin: 0.5rem 0;
  padding: 0.1rem;
  letter-spacing: 0.1rem;
`;

function SignForm({ buttonText, buttonClick }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [valForm, setValForm] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const setValidForm = (key, expression) => {
    if (expression && !valForm[key]) setValForm({ ...valForm, [key]: true });
    else if (!expression && valForm[key])
      setValForm({ ...valForm, [key]: false });
  };
  const changeInput = (key) => (event) => {
    const value = event.target.value;
    const expression =
      key === "email" ? value.includes("@") : value.length >= 8;

    setForm({ ...form, [key]: value });
    setValidForm(key, expression);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) navigate("/todo");
  }, []);

  return (
    <FormContainer>
      <InputBox>
        <BasicInput
          type="text"
          id="email"
          name="이메일"
          setInput={changeInput("email")}
        />
        <BasicInput
          type="password"
          id="password"
          name="비밀번호"
          setInput={changeInput("password")}
        />
      </InputBox>
      <div>
        {form.email && !valForm.email && (
          <Notification>
            이메일은 <strong>@</strong>가 포함되어야 합니다.
          </Notification>
        )}
        {form.password && !valForm.password && (
          <Notification>
            비밀번호는 <strong>8자</strong> 이상이어야 합니다.
          </Notification>
        )}
      </div>
      <SignButton
        disabled={!Object.values(valForm).every((val) => val)}
        data-testid={
          buttonText === "로그인" ? "signin-button" : "signup-button"
        }
        type="button"
        onClick={() => buttonClick(form)}
      >
        {buttonText}
      </SignButton>
    </FormContainer>
  );
}

export default SignForm;
