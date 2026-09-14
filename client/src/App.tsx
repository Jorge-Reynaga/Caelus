import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'
import DetailsPanel from './components/DetailsPanel'

import Toolbar from './components/Toolbar'
import AddressBar from './components/AddressBar'
import NewButton from './components/NewButton'

import './index.css'

function App() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <MainPanel>
        <Toolbar>
          <AddressBar className="m-3"></AddressBar>
          <NewButton className="m-3 ml-0"></NewButton>
        </Toolbar>
      </MainPanel>
      <DetailsPanel></DetailsPanel>
    </div>
  )
}

export default App
