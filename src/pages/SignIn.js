import PageTemplate from "../components/PageTemplate";
import SignForm from "../components/SignForm";

function SignIn() {
  return (
    <PageTemplate pageName="로그인">
      <SignForm buttonText="로그인" />
    </PageTemplate>
  );
}

export default SignIn;
