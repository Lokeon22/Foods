export const Button = ({ id, name, ...rest }) => {
  return (
    <button
      id={id}
      className="bg-[#92000E] w-full rounded px-3 py-3 hover:bg-[#83010e] duration-300 mb-4 md:mb-8"
      type="submit"
      {...rest}
    >
      {name}
    </button>
  );
};
