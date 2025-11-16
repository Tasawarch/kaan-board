function Button({ text, onClick, disabled = false, className = "", variant = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-lg transition mt-3 ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : variant
          ? "bg-[#A02D5D] text-white hover:bg-[#8B1F48]"
          : "bg-[#A02D5D] text-white hover:bg-[#A02D6D]"
      } ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
