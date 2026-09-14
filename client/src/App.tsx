import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'
import DetailsPanel from './components/DetailsPanel'
import AddressBar from './components/AddressBar'
import NewButton from './components/NewButton'

import './index.css'

function App() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <MainPanel>
        <div className="flex">
          <AddressBar></AddressBar>
          <NewButton></NewButton>
        </div>
      </MainPanel>
      <DetailsPanel></DetailsPanel>
    </div>
  )
}

export default App
