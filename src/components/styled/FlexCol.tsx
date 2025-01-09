import { PropsWithChildren } from "react"
interface IGrid extends PropsWithChildren{
  className?: string
}
function FlexCol({className,children}:IGrid) {
  return (
    <div className={` flex flex-col ${className}`}>
      {children}
    </div>
  )
}

export default FlexCol