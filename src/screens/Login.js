import styled from "styled-components";
import { darkModeVar } from "../apollo";

const Title = styled.h1`
  color: ${(props)=>props.theme.fontColor};
`;

const Container = styled.div``;

function Login() {
  return (
    <Container>
      <Title>logIn</Title>
      <button onClick={()=>darkModeVar(true)}>To Dark</button>
      <button onClick={()=>darkModeVar(false)}>To light</button>
    </Container>
  );
}
export default Login;
