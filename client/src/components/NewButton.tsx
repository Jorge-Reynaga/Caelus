interface NewButtonProps {
  className?: string
  onOpenModal: () => void
}

function NewButton({ className = "", onOpenModal }: NewButtonProps) {
  return (
    <button type="button" className={`
      w-3xs h-12
      bg-[#19B2E5] 
      rounded-2xl shadow-lg cursor-pointer 
      ${className}
    `} onClick={onOpenModal}>
      <span>New</span>
    </button>
  )
}

export default NewButton