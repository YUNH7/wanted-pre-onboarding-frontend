import PageTemplate from "../components/PageTemplate";
import { P } from "./Main";

function Error() {
  return (
    <PageTemplate pageName="404">
      <P>잘못된 접근입니다</P>
    </PageTemplate>
  );
}

export default Error;
