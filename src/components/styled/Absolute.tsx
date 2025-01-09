import { PropsWithChildren } from "react"
interface IGrid extends PropsWithChildren{
  className?: string
  onClick?:() => void
}
function Absolute({className,onClick,children}:IGrid) {
  return (
    <div onClick={onClick} className={` absolute ${className}`}>
      {children}
    </div>
  )
}

export default Absolute