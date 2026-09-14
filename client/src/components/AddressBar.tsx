interface AddressBarProps {
  className?: string
}

function AddressBar({ className = "" }: AddressBarProps) {
  return (
    <div className={`bg-[#4C4C4C] w-full h-12 rounded-2xl shadow-lg ${className}`}>
    </div>
  )
}

export default AddressBar