import { FiChevronLeft } from "react-icons/fi";

export const Carouselleft = ({ carousel }) => {
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  return (
    <button
      className="px-1 hover:text-gray-400 duration-300"
      onClick={handleLeftClick}
    >
      {<FiChevronLeft size={32} />}
    </button>
  );
};
