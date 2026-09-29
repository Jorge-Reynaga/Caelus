import CreateForm from "./CreateForm"

function Modal() {
  return (
    <div className={`
      flex
      fixed h-dvh w-full
      bg-[#000000]/50
      items-center justify-center
      transition-opacity
    `}>
      <div className={`
        flex flex-wrap
        w-96 h-96 
        bg-[#323232] 
        rounded-4xl shadow-2xl
      `}>
        <div className="flex w-full">
          <button type="button" className="w-1/2">
            <span className={`
              text-[20px] text-[#FFFFFF] tracking-wide 
              cursor-pointer
            `}>
              Create
            </span>
          </button>

          <button type="button" className="w-1/2">
            <span className={`
              text-[20px] text-[#4C4C4C] tracking-wide hover:text-[#D9D9D9]
              cursor-pointer
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
        
        <CreateForm />
      </div>
    </div>
  )
}

export default Modal