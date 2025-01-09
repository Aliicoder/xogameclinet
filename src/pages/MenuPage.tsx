import { Link } from "react-router-dom";
import logo from "@/assets/tic-tac-toe.png"
import Grid from "@/components/styled/Grid";
import FlexCol from "@/components/styled/FlexCol";
const Menu = () => {
  const gameId = crypto.randomUUID();
  return ( 
  <Grid className="w-[100vw] h-[100vh] text-white bg-black ">
    <FlexCol className="place-self-center">
      <div>1.0.9</div>
      <div>
        <img src={logo} alt="" />
      </div>
      <FlexCol>
        <Link className="bg-[#303030] hover:outline hover:pl-4 transition-all text-red-500 rounded-md py-3 px-2 m-2" to="offline">OFFLINE GAME</Link>
        <Link className="bg-[#303030] hover:outline hover:pl-4 transition-all text-sky-500 rounded-md py-3 px-2 m-2" to={`online/${gameId}`}>ONLINE GAME</Link>
      </FlexCol>
    </FlexCol>
  </Grid>
  );
}
 
export default Menu;