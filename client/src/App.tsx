import { useState } from "react"

import Sidebar from './components/Sidebar'
import MainPanel from './components/MainPanel'
import DetailsPanel from './components/DetailsPanel'

import AddressBar from './components/AddressBar'
import NewButton from './components/NewButton'

import Modal from './components/Modal'

import './index.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <MainPanel>
        <header className="flex">
          <AddressBar className="m-3"></AddressBar>
          <NewButton className="m-3 ml-0" onOpenModal={() => setModalOpen(true)}></NewButton>
        </header>
      </MainPanel>
      <DetailsPanel></DetailsPanel>
      <Modal open={modalOpen} onCloseModal={() => setModalOpen(false)}></Modal>
    </div>
  )
}

export default App
