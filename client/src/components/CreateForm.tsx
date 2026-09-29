function CreateForm() {
  return (
    <form className="flex flex-wrap w-full">
      <div className={`
        flex 
        w-full
        m-4 mt-0 
        items-center
      `}>
        <label className={`
          flex-1 
          w-1/2 
          text-[24px] text-[#FFFFFF] text-center
        `}>
          File name
        </label>
        <input className={`
          flex-1 
          w-1/2 h-12 
          p-4 bg-[#4C4C4C]
          text-[18px] text-[#FFFFFF] 
          rounded-2xl shadow-lg 
          focus:outline-0
        `} type="text" />
      </div>

      <div className={`
        flex
        w-full 
        m-4 
        items-center
      `}>
        <label className={`
          flex-1 
          w-1/2 
          text-[24px] text-[#FFFFFF] text-center
        `}>
          File type
        </label>
        <select className={`
          flex-1 
          w-1/2 h-12 
          pl-4 pr-4 bg-[#4C4C4C] 
          text-[18px] text-[#FFFFFF]
          rounded-2xl shadow-lg
        `}>
          <option value="Directory">Directory</option>
        </select>
      </div>

      <div className={`
        flex 
        w-full
        items-center
      `}>
        <button type="button" className={`
          w-1/2 h-12
          m-4 bg-[#4C4C4C] 
          text-[18px] text-[#FFFFFF]
          rounded-2xl shadow-lg 
          cursor-pointer
        `}>
          <span>Cancel</span>
        </button>

        <button type="submit" className={`
          w-1/2 h-12
          m-4 bg-[#19B2E5]
          text-[18px] text-[#FFFFFF] 
          rounded-2xl shadow-lg 
          cursor-pointer
        `}>
          <span>Create</span>
        </button>
      </div>
    </form>
  )
}

export default CreateForm