function Modal() {
  return (
    <div className="flex fixed bg-[#000000]/50
    h-dvh w-full transition-opacity items-center justify-center">

      <form onSubmit={undefined} className="w-96 h-96 bg-[#323232] rounded-4xl flex flex-wrap shadow-2xl">
        <div className="w-full flex">
          <button type="button" className="w-1/2 cursor-pointer text-[#FFFFFF] text-[20px] tracking-wide">
            <span>Create</span>
          </button>
          <button type="button" className="w-1/2 cursor-pointer hover:text-[#D9D9D9] text-[#4C4C4C] text-[20px] tracking-wide">
            <span>Upload</span>
          </button>
        </div>

        <div className="w-full border-t-2 ml-4 mr-4 h-0 border-[#4C4C4C]"></div>

        <div className="w-full flex m-4 mt-0 items-center">
          <label className="flex-1 w-1/2 text-[#FFFFFF] text-center text-[24px]">File name</label>
          <input className="flex-1 w-1/2 h-12 bg-[#4C4C4C] text-[18px] p-4 rounded-2xl shadow-lg text-[#FFFFFF] focus:outline-0" type="text"></input>
        </div>

        <div className="w-full flex m-4 items-center">
          <label className="flex-1 w-1/2 text-[#FFFFFF] text-center text-[24px]">File type</label>
          <select className="flex-1 w-1/2 h-12 bg-[#4C4C4C] text-[18px] p-4 rounded-2xl shadow-lg text-[#FFFFFF]">
            <option value="Directory">Directory</option>
          </select>
        </div>

        <div className="w-full flex items-center">
          <button type="button" className={`bg-[#4C4C4C] text-[#FFFFFF] text-[18px] w-1/2 h-12 rounded-2xl shadow-lg cursor-pointer m-4`}>
            <span>Cancel</span>
          </button>
          <button type="submit" className={`bg-[#19B2E5] text-[#FFFFFF] text-[18px] w-1/2 h-12 rounded-2xl shadow-lg cursor-pointer m-4`}>
            <span>Create</span>
          </button>
        </div>
      </form>

    </div>
  )
}

export default Modal