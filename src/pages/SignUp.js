import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import SignForm from "../components/SignForm";
import postData from "../utilities/postData";

function SignUp() {
  const navigate = useNavigate();

  const signUpReq = (form) => {
    postData("/auth/signup", form).then((res) => {
      if (res.status === 201) navigate("/signin");
      else if (res.status === 400) alert(res.data.message);
      else alert("서버 확인 필요");
    });
  };

  return (
    <PageTemplate pageName="회원가입">
      <SignForm buttonText="회원가입" buttonClick={signUpReq} />
    </PageTemplate>
  );
}

export default SignUp;
