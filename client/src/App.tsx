import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'
import DetailsPanel from './components/DetailsPanel'

import './index.css'

function App() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <MainPanel></MainPanel>
      <DetailsPanel></DetailsPanel>
    </div>
  )
}

export default App
