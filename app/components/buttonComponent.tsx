
type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="px-4 py-2 rounded-full font-bold  transition-colors bg-[var(--soporte)] text-[var(--colorborde)] border-[var(--colorborde)] hover:bg-transparent hover:text-[var(--colorborde)]"
    >
      {text}
    </button>
  );
};

export default Button;

