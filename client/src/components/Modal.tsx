import { useState } from "react"

import CreateForm from "./CreateForm"
import UploadForm from "./UploadForm"

type Tab = "create" | "upload"

function Modal() {
  const [tab, setTab] = useState<Tab>("create");

  return (
    <div className={`
      flex
      fixed h-dvh w-full
      bg-[#000000]/50
      items-center justify-center
      transition-opacity
    `}>
      <div className={`
        flex flex-wrap content-start
        w-96 h-96
        bg-[#323232] 
        rounded-4xl shadow-2xl
      `}>
        <div className="flex w-full h-fit m-4">
          <button type="button" className="w-1/2" onClick={() => setTab("create")}>
            <span className={`
              text-[20px] tracking-wide 
              cursor-pointer
              ${tab === "upload" ? "text-[#4C4C4C] hover:text-[#D9D9D9]" : "text-[#FFFFFF]"}
            `}>
              Create
            </span>
          </button>

          <button type="button" className="w-1/2" onClick={() => setTab("upload")}>
            <span className={`
              text-[20px] tracking-wide
              cursor-pointer
              ${tab === "create" ? "text-[#4C4C4C] hover:text-[#D9D9D9]" : "text-[#FFFFFF]"}
            `}>
              Upload
            </span>
          </button>
        </div>

        <div className={`
          w-full h-0
          ml-4 mr-4 
          border-t-2 border-[#4C4C4C]
        `} />
        
        {tab === "create" ? <CreateForm /> : <UploadForm />}
      </div>
    </div>
  )
}

export default Modal