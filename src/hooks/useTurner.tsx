import { initialGame } from "@/constants/INITIAL_GAME"
import { ITurn } from "@/types/types"
import { useState } from "react"

export default  () => {
  const [gameBoard,setGameBoard] = useState([...initialGame.map(array=>[...array])])
  const [turns,setTurns] = useState<ITurn[]>([])
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
      return newTurns
    })
  }
  const reset = () =>{
    setGameBoard([...initialGame.map(array=>[...array])])
    setTurns([])
  }
  return {turns,gameBoard,setTurns,addNewTurn,reset}
}