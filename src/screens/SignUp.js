import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import TopBox from "../components/auth/TopBox";
import Input from "../components/auth/Input";
import Seperator from "../components/auth/Seperator";
import routes from "./routes";
import BottomBox from "../components/auth/BottomBox";
import styled from "styled-components";
import { FatLink } from "../components/shared";
import PageTitle from "../components/PageTitle";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
  align-items: center;
`;

const SubTitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const SSeperator = styled(Seperator)`
  margin:0px;
  span{font-size:25px;}
`;

function SignUp() {
  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <TopBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <SubTitle>
            Sign up to see photos and videos from your friends.
          </SubTitle>
        </HeaderContainer>
        <Button type="submit" value="Log In with Facebook"></Button>
        <SSeperator />
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="UserName" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign Up" />
        </form>
      </TopBox>
      <BottomBox
        cta={"Have an account?"}
        linkText="Log In"
        link={routes.home}
      />
    </AuthLayout>
  );
}

export default SignUp;
