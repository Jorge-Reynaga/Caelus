import type { ReactNode } from "react"

interface ToolbarProps {
  children?: ReactNode
}

function Toolbar({ children }: ToolbarProps) {
  return (
    <header className="flex">
      {children}
    </header>
  )
}

export default Toolbar