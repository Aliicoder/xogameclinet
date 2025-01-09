import Grid from "../styled/Grid";

interface NoWinnerProps {
  handleReset: () => void;
}
const NoWinner = ({handleReset}:NoWinnerProps) => {
  return ( 
    <Grid className="z-10 bg-black text-white w-[100vw] h-[100vh] absolute top-[50%] left-[50%] center ">
      <div className="flex flex-col justify-center items-center
          px-10 py-7 place-self-center bg-[#303030] rounded">
        <h1>GAME OVER</h1>
        <h2>DRAW</h2>
        <button
          className="py-2 rounded px-3 mt-4 bg-black m-0"
          onClick={handleReset}>rematch</button>
      </div>
    </Grid>
   );
}
 
export default NoWinner;