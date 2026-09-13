import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'
import DetailsPanel from './components/DetailsPanel'
import AddressBar from './components/AddressBar'

import './index.css'

function App() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <MainPanel>
        <AddressBar></AddressBar>
      </MainPanel>
      <DetailsPanel></DetailsPanel>
    </div>
  )
}

export default App
