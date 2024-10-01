const Button = ({ onClick, children }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex text-text cursor-pointer items-center rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-2 text-sm font-base shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
