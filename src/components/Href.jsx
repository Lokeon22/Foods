import { Link } from "react-router-dom";

export const Href = ({ name, to }) => {
  return (
    <div className="text-center font-medium">
      <Link to={to}>{name}</Link>
    </div>
  );
};
