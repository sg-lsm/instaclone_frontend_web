import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={()=>logUserOut()}>LogOut Now</button>
      </div>
  );
}
export default Home;
