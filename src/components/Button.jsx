const Button = ({ children = "Discover features", onClick }) => {
  return (
    <button
      style={{ background: "var(--primary)", color: "var(--button-text)" }}
      className={
        "px-4 py-2 block text-center mx-auto rounded-lg font-medium cursor-pointer transition duration-300 active:scale-95"
      }
      onClick={onClick}
    >
      <strong>{children}</strong>
    </button>
  );
};

export default Button;
