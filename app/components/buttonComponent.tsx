
type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="px-4 py-2 rounded-full font-bold  transition-colors bg-soporte text-borde  hover:bg-transparent hover:text-borde"
    >
      {text}
    </button>
  );
};

export default Button;

