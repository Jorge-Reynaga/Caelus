import { useState } from "react"

function CreateForm() {
  const [formData, setFormData] = useState({name: "", type: "Directory"});

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams(formData);

    await fetch(`/api/file?${params}`, {
      method: "POST",
    });
  };
  
  return (
    <form className="flex flex-wrap w-full" onSubmit={handleSubmit}>
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
        `} type="text" name="name" value={formData.name} onChange={handleChange} required />
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
        `} name="type" value={formData.type} onChange={handleChange}>
          <option value="Directory">Directory</option>
          <option value="Text file">Text file</option>
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