import PageTemplate from "../components/PageTemplate";
import SignForm from "../components/SignForm";

function SignUp() {
  return (
    <PageTemplate pageName="회원가입">
      <SignForm buttonText="회원가입" />
    </PageTemplate>
  );
}

export default SignUp;
