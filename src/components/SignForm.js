function SignForm({ buttonText, buttonClick }) {
  return (
    <form>
      <label htmlFor="email">이메일</label>
      <input data-testid="email-input" id="email" />
      <label htmlFor="password">비밀번호</label>
      <input data-testid="password-input" id="password" type="password" />
      <button
        type="button"
        data-testid={
          buttonText === "로그인" ? "signin-button" : "signup-button"
        }
        onClick={buttonClick}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default SignForm;
