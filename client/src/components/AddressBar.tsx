interface AddressBarProps {
  className?: string
}

function AddressBar({ className = "" }: AddressBarProps) {
  return (
    <div className={`
      w-full h-12
      bg-[#4C4C4C]
      rounded-2xl shadow-lg 
      ${className}
    `}>
    </div>
  )
}

export default AddressBar