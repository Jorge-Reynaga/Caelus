import type { ReactNode } from "react"

interface MainPanelProps {
  children?: ReactNode
}

function MainPanel({children}: MainPanelProps) {
  return (
    <main className="flex-1 h-dvh bg-[#3F3F3F]">
      {children}
    </main>
  )
}

export default MainPanel