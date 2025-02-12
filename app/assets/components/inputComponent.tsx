
type InputProps = {
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ placeholder = "Escribe aquí..." }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-transparent bg-[var(--colorform)] shadow-md outline-none transition-all hover:border-[var(--colorprincipal)]"
    />
  );
};

export default Input;