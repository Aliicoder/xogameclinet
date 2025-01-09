import { socket } from "@/lib/socket";
import { IGameBoard, IPlayer, ITurn } from "@/types/types";
import { notify } from "@/utils/helpers";
import { useEffect, useState } from "react";

interface IUseSocket {
  roomId: string | undefined
  user: any
  gameBoard:IGameBoard
  setGameBoard:React.Dispatch<React.SetStateAction<(string | null)[][]>>
  setLock:React.Dispatch<React.SetStateAction<boolean>>
  setTurns:  React.Dispatch<React.SetStateAction<ITurn[]>>
}
export default ({roomId, user , gameBoard ,setGameBoard ,setLock, setTurns}:IUseSocket) =>{
  const player: IPlayer = { firstName: user?.firstName ?? '', imageUrl: user?.imageUrl ?? '' }
  const [opponent, setOpponent] = useState<IPlayer | null>(null);
  useEffect(() => {
    socket.connect();
    socket.emit("player>>connect>>opponent",{roomId,player})
    socket.on("exchange_data", () => {
      console.log("exchange_data")
      socket.emit("player>>data>>opponent", {
        roomId,
        player,
      })
    })

    socket.on("opponent<<data<<player", ({player}) => {
      console.log("opponent >>",player)
      setOpponent(player)
    })

    socket.on("opponent<<turns<<player", ({turns}) => {
      notify()
      setLock(false)
      setTurns(turns)
      const newGameBoard = turns.reduce((gameBoard:IGameBoard, turn:ITurn) => {
        gameBoard[turn.block.i][turn.block.j] = turn.activePlayer;
        return gameBoard;
      }, [...gameBoard.map(row => [...row])])
      setGameBoard(newGameBoard);
    });

    return () => {
      socket.off("player>>connect>>opponent");
      socket.off("exchange_data");
      socket.off("player>>data>>opponent");
      socket.off("opponent<<data<<player");
      socket.off("opponent<<turns<<player");
      socket.disconnect();
    };
  }, [])


  return { player , opponent, setLock }
}