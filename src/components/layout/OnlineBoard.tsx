interface Player {
  firstName: string;
  imageUrl: string;
}
interface OnlineBoardProps {
  gameBoard: (string | null)[][];
  addNewTurn: (i: number, j: number) => void;
  player1: Player | null;
  player2: Player | null;
  lock: boolean | undefined;
}
const OnlineBoard = ({gameBoard,addNewTurn,player1,player2,lock}:OnlineBoardProps) => {
  return ( 
    <>
      <div className={`place-self-center flex flex-col items-center ${lock ? "pointer-events-none" : ""}`}>
        <div className="text-white gameBoard text-4xl outline outline-black">
            {
              gameBoard.map((row,i)=>(
                <ul className="flex" key={i}>
                { 
                  row.map((column,j)=>(
                    <button
                      disabled={column? true:false}
                      onClick={()=>addNewTurn(i,j)} 
                      className="flex justify-center items-center w-20 h-20 outline outline-[#303030] outline-1 " 
                      key={j}>{column}</button>
                  ))
                }
                </ul>
              ))
            }
          </div>
          <div className="flex pt-10 flex-col items-center  justify-center mt-10  gap-5 text-white w-[100%]">
            <div className={` flex w-[200px] h-[50px]  items-center  overflow-hidden  bg-[#303030]  `}>
              <div className="bg-black min-w-8 h-8 rounded-full ml-3 overflow-hidden">
                <img className="w-[100%] h-[100%] " src={player1?.imageUrl} alt="" />
              </div>
              <h1 className=" text-nowrap overflow-hidden text-ellipsis p-3">{player1?.firstName}</h1>
            </div>
            <div className={`flex  w-[200px] h-[50px]   items-center  bg-[#303030]  `}>
              {
                player2 == undefined ?
                <p></p>
                :
                <>
                  <div className="bg-black min-w-8 h-8 rounded-full ml-3 overflow-hidden">
                    <img className="w-[100%] h-[100%]" src={player2?.imageUrl} alt="" />
                  </div>
                  <h1 className=" text-nowrap text-ellipsis overflow-hidden p-3">
                    {player2?.firstName}
                  </h1>
                </>
              }
            </div>
          </div>
       </div>
    </>
   );
}
 
export default OnlineBoard;