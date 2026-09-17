function Modal() {
  return (
    <div className="flex fixed bg-[#000000]/50
    h-dvh w-full transition-opacity items-center justify-center">

      <form onSubmit={undefined} className="w-96 h-96 bg-[#323232] rounded-4xl flex flex-wrap shadow-2xl">
        <div className="w-full flex m-4">
          <label className="flex-1 w-1/2 text-[#FFFFFF] text-center">File name</label>
          <input className="flex-1 w-1/2 bg-[#4C4C4C] rounded-2xl shadow-lg text-[#FFFFFF] focus:outline-0" type="text"></input>
        </div>

        <div className="w-full flex m-4">
          <label className="flex-1 w-1/2 text-[#FFFFFF] text-center">File type</label>
          <select className="flex-1 w-1/2 bg-[#4C4C4C] rounded-2xl shadow-lg text-[#FFFFFF]"></select>
        </div>

        <div className="w-full flex">
          <button type="button" className={`bg-[#4C4C4C] text-[#FFFFFF] w-1/2 h-12 rounded-2xl shadow-lg cursor-pointer m-4`}>
            <span>Cancel</span>
          </button>
          <button type="submit" className={`bg-[#19B2E5] text-[#FFFFFF] w-1/2 h-12 rounded-2xl shadow-lg cursor-pointer m-4`}>
            <span>Create</span>
          </button>
        </div>
      </form>

    </div>
  )
}

export default Modal