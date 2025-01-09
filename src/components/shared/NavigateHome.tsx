import Absolute from '../styled/Absolute'
import { useNavigate } from 'react-router-dom'

function NavigateHome() {
  const navigate = useNavigate()
  return (
    <Absolute onClick={() => navigate("/")} 
      className=" m-10 px-3 py-2 | bg-[#303030] text-white 
      md:m-20">
      HOME
    </Absolute>
  )
}

export default NavigateHome