type InputProps = {
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ placeholder = "Escribe aquí..." }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-auto min-w-[250px] max-w-md px-4 py-2 border border-transparent bg-form shadow-md outline-none transition-all hover:border-principal rounded-md"
    />
  );
};

export default Input;
