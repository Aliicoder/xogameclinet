import { initialGame } from "@/constants/INITIAL_GAME"
import { socket } from "@/lib/socket"
import { ITurn } from "@/types/types"
import { useState } from "react"
interface ITurner {
  roomId: string | undefined
  turns:ITurn[]
  setTurns:React.Dispatch<React.SetStateAction<ITurn[]>>
  setLock:React.Dispatch<React.SetStateAction<boolean>>
}
export default  ({roomId,setTurns,setLock}:ITurner) => {
  const [gameBoard,setGameBoard] = useState([...initialGame.map(array=>[...array])])
  const addNewTurn = (i:number,j:number) =>{
    if (gameBoard[i][j]) 
      return
    setTurns((prevTurns) =>{
      const activePlayer = prevTurns.length > 0 && prevTurns[0].activePlayer === "x" ? "o" : "x"
      const newTurns = [{ activePlayer, block: { i, j } }, ...prevTurns]
      const newGameBoard = gameBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) => (rowIndex === i && colIndex === j ? activePlayer : cell))
      )
      setGameBoard(newGameBoard)
      socket.emit("player>>turns>>opponent", { roomId, turns:newTurns })
      return newTurns
    })
    setLock(true)
  }
  const reset = () =>{
    setGameBoard([...initialGame.map(array=>[...array])])
    setTurns([])
  }
  return {gameBoard,setGameBoard,setTurns,addNewTurn,reset}
}