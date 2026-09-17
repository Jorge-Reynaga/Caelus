import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'
import DetailsPanel from './components/DetailsPanel'

import AddressBar from './components/AddressBar'
import NewButton from './components/NewButton'

import Modal from './components/Modal'

import './index.css'

function App() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <MainPanel>
        <header className="flex">
          <AddressBar className="m-3"></AddressBar>
          <NewButton className="m-3 ml-0"></NewButton>
        </header>
      </MainPanel>
      <DetailsPanel></DetailsPanel>
      <Modal></Modal>
    </div>
  )
}

export default App
