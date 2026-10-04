import folderMuted from "../assets/folder-muted.svg"

function UploadForm() {
  return (
    <form className="flex flex-wrap w-full justify-center mt-4" onSubmit={undefined}>
      <button type="button" className="w-72 flex flex-wrap justify-center border-dashed border-4 border-[#4C4C4C] p-4">
        <img src={folderMuted} width="200" height="200" />
        <span className="text-[18px] text-[#D9D9D9]">Click or drop...</span>
      </button>

      <div className={`
        flex
        w-full
        items-center
        mt-auto
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
          <span>Upload</span>
        </button>
      </div>
    </form>
  )
}

export default UploadForm