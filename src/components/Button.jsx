const Button = ({ onClick, children }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className='flex items-center bg-accent-primary hover:bg-accent-primary/90 text-slate-900 px-4 py-2 font-medium transform hover:scale-[1.02] duration-300 rounded shadow-md'
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
