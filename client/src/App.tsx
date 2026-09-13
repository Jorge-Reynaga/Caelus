import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'

import './index.css'

function App() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <MainPanel></MainPanel>
    </div>
  )
}

export default App
