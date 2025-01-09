import OfflineBoard from "@/components/layout/OfflineBoard";
import NoWinner from "@/components/portals/NoWinner";
import Winner from "@/components/portals/Winner";
import { checkForWinner } from "@/utils/helpers";
import Grid from "@/components/styled/Grid";
import NavigateHome from "@/components/shared/NavigateHome";
import useTurner from "@/hooks/useTurner";

function OfflineGameBoardPage() {
  const {turns,gameBoard,addNewTurn,reset} = useTurner()
  let winner:(string|null) = checkForWinner(gameBoard);

  return (
    <Grid className=' bg-black h-[100vh] w-[100wh] relative'>
      <NavigateHome />
      { winner && 
      <Winner winner={winner} handleReset={reset}/>
      }
      { turns.length == 9 && 
      <NoWinner handleReset={reset}/>
      }   
      <OfflineBoard gameBoard={gameBoard} addNewTurn={addNewTurn} />
    </Grid>
  )
}

export default OfflineGameBoardPage
