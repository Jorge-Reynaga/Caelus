interface NewButtonProps {
  className?: string
}

function NewButton({ className = "" }: NewButtonProps) {
  return (
    <button className={`bg-[#19B2E5] w-3xs h-12 rounded-2xl shadow-lg cursor-pointer ${className}`}>
      <span>New</span>
    </button>
  )
}

export default NewButton