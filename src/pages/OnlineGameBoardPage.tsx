import { useClerk } from "@clerk/clerk-react";
import { Link, useParams } from "react-router-dom";
import NoWinner from "@/components/portals/NoWinner";
import Winner from "@/components/portals/Winner";
import OnlineBoard from "@/components/layout/OnlineBoard";
import { checkForWinner, copyUrlToClipboard } from "@/utils/helpers";
import useSocket from "@/hooks/useSocket";
import { useState } from "react";
import useTurnerOnline from "@/hooks/useTurnerOnline";
import { ITurn } from "@/types/types";
function OnlineGameBoardPage() {
  const { roomId }  = useParams() 
  const { user } = useClerk()
  const [ lock, setLock ] = useState<boolean>(false)
  const [ turns,setTurns] = useState<ITurn[]>([])
  const { gameBoard ,setGameBoard,addNewTurn,reset } = useTurnerOnline({roomId,turns,setTurns,setLock})
  const { player , opponent } = useSocket({roomId, user,gameBoard,setGameBoard,setLock,setTurns})
  let winner = checkForWinner(gameBoard)
  return (
    <div className={`grid bg-black h-[100vh] w-[100wh] relative`}>
      <Link className="absolute  hover:outline  x-sm:m-5  text-white sm:m-20  px-3 py-2 bg-[#303030] " to="/">HOME</Link>
      <button
        onClick={copyUrlToClipboard} 
        className="absolute hover:outline x-sm:m-5 sm:m-20 left-[100px] text-white m-20 px-3 py-2 bg-[#303030] ">INVITE</button>
      { winner && 
      <Winner winner={winner} handleReset={reset}/>
      }
      { turns.length == 9 && 
      <NoWinner handleReset={reset}/>
      }
      <OnlineBoard player1={player} player2={opponent} lock={lock} gameBoard={gameBoard} addNewTurn={addNewTurn} />
    </div>
  );
}

export default OnlineGameBoardPage;


