import { Link } from "react-router-dom";

export const Href = ({ name, to }) => {
  return (
    <div className="text-center font-medium font-Poppins hover:text-[#dadada] duration-300">
      <Link to={to}>{name}</Link>
    </div>
  );
};
