import { PropsWithChildren } from "react"
interface IGrid extends PropsWithChildren{
  className: string
}
function Grid({className,children}:IGrid) {
  return (
    <div className={` grid ${className}`}>
      {children}
    </div>
  )
}

export default Grid