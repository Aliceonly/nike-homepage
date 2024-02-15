const Button = ({ label, iconUrl }) => {
  return (
    <button className="bg-coral-red flex justify-center items-center gap-2 px-7 py-4 border-coral-red text-white rounded-full font-montserrat text-lg leading-none">
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  )
}

export default Button
