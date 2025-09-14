const Button = ({ children = "Discover features", onClick }) => {
  return (
    <button
      className="
        px-4 py-2 
        block
        text-center 
        mx-auto
        rounded-lg 
        text-white
        bg-[#19A7CE] 
        font-medium 
        cursor-pointer 
        transition 
        duration-300 
        hover:shadow-[7px_5px_56px_-14px_#FFFDF6] 
        active:scale-95 
        active:shadow-[7px_5px_56px_-10px_#FFFDF6]
      "
      onClick={onClick}
    >
      <strong>{children}</strong>
    </button>
  );
};

export default Button;
