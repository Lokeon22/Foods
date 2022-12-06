export const Input = ({ id, type, place, ...rest }) => {
  return (
    <>
      <label
        htmlFor={id}
        style={{ textTransform: "capitalize", color: "#C4C4CC" }}
      >
        {id}
      </label>
      <input
        id={id}
        type={type}
        placeholder={place}
        className="w-full px-3 py-3 rounded outline-none mt-1 mb-4 md:mb-8 border border-gray-500 bg-transparent"
        {...rest}
      />
    </>
  );
};
