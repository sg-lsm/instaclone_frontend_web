import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import TopBox from "../components/auth/TopBox";
import Input from "../components/auth/Input";
import Seperator from "../components/auth/Seperator";
import routes from "./routes";
import BottomBox from "../components/auth/BottomBox";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  return (
    <AuthLayout>
      <TopBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log In" />
        </form>
        <Seperator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </TopBox>
      <BottomBox
        cta={"Don't have an account?"}
        link={routes.signUp}
        linkText="Sign Up"
      />
    </AuthLayout>
  );
}

export default Login;
