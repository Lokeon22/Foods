export const Button = ({ id, name, ...rest }) => {
  return (
    <button
      id={id}
      className="bg-[#92000E] w-full lg:w-[348px] rounded px-3 py-3 hover:bg-[#83010e] hover:text-[#c5c5c5] duration-300 mb-4 md:mb-8 font-Poppins font-medium"
      type="submit"
      {...rest}
    >
      {name}
    </button>
  );
};
