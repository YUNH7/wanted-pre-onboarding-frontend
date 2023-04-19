import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: fit-content;
  width: 30%;
`;
const InpulEl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;

  label {
    padding-right: 0.5rem;
    font-weight: bold;
  }
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

  const changeInput = (key) => (event) => {
    const value = event.target.value;
    setForm({ ...form, [key]: value });
    if (key === "email") {
      if (value.includes("@")) {
        if (!valForm.email) setValForm({ ...valForm, email: true });
      } else if (valForm.email) setValForm({ ...valForm, email: false });
    } else {
      if (value.length >= 8) {
        if (!valForm.password) setValForm({ ...valForm, password: true });
      } else if (valForm.password) setValForm({ ...valForm, password: false });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) navigate("/todo");
  }, []);

  return (
    <FormContainer>
      <InpulEl>
        <label htmlFor="email">이메일</label>
        <input
          data-testid="email-input"
          type="text"
          id="email"
          onChange={changeInput("email")}
        />
      </InpulEl>
      <InpulEl>
        <label htmlFor="password">비밀번호</label>
        <input
          data-testid="password-input"
          id="password"
          type="password"
          onChange={changeInput("password")}
        />
      </InpulEl>
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
