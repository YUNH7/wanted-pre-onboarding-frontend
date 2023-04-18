import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import SignForm from "../components/SignForm";
import postData from "../utilities/postData";

function SignIn() {
  const navigate = useNavigate();

  const signInReq = (form) => {
    postData("/auth/signin", form).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      } else if (res.status === 401) alert("이메일/비밀번호를 확인해주세요");
      else alert("서버 확인 필요");
    });
  };

  return (
    <PageTemplate pageName="로그인">
      <SignForm buttonText="로그인" buttonClick={signInReq} />
    </PageTemplate>
  );
}

export default SignIn;
