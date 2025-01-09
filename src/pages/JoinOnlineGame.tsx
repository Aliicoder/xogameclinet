import {  useRef } from "react";
import { useNavigate } from "react-router-dom";

const JoinOnlineGame = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    const code = inputRef.current?.value 
    const url = `${code}`
    navigate(url)
  }
  return ( 
    <div className="grid place-items-center w-[100vw] bg-black h-[100vh]">
      <div className="flex items-center gap-10 p-20 flex-col">
        <input ref={inputRef}  className="p-2 rounded-sm" type="text" placeholder="paste the code" />
        <button onClick={handleClick} 
          className="bg-[#303030] hover:outline hover:pl-4 transition-all w-fit text-amber-500 rounded-md transition py-2 px-2 m-2">JOIN</button>
      </div>
    </div>
   );
}
 
export default JoinOnlineGame;